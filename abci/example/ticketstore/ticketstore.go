package ticketstore

import (
	"encoding/json"
	"fmt"

	"github.com/tendermint/tendermint/abci/types"
)

const (
	codeTypeOK            uint32 = 0
	codeTypeEncodingError uint32 = 1
	codeTypeModelError    uint32 = 2
)

var (
	ErrBadRound       = "The round number is not match"
	ErrConflict       = "The model round number has been used"
)

type TicketStoreApplication struct {
	types.BaseApplication
	state State
}

type State struct {
	aggregatedModel Model
	historyModel map[uint64]Snapshot
	height uint64
	round  uint64
	clientsNumber int
	rootHash []byte
}

type Model string

type Snapshot struct {
	ready bool
	localModels map[uint64]Model
	update map[uint64]bool
}

type ModelTx struct {
	Round		uint64	`json:"round"`
	CID			uint64 	`json:"cid"`
	Model       string  `json: "model"`
	Signature 	string 	`json:"signature"`
}

func NewTicketStoreApplication() *TicketStoreApplication {
	return &TicketStoreApplication{
		state: State{ aggregatedModel: "not initialized",
					  historyModel: make( map[uint64]Snapshot ),
					  clientsNumber: 1,
					},
		}
}

func (app *TicketStoreApplication) Info(req types.RequestInfo) types.ResponseInfo {
	return types.ResponseInfo{
		Data:             fmt.Sprintf(`{round: %v, model: %v}`, app.state.round, app.state.aggregatedModel),
		LastBlockHeight:  int64(app.state.height),
		LastBlockAppHash: app.state.rootHash,
	}
}

func (app *TicketStoreApplication) DeliverTx(tx types.RequestDeliverTx) types.ResponseDeliverTx {
	fmt.Printf("Debug0: %v\n", tx)
	var modelTx ModelTx
	err := json.Unmarshal(tx.Tx, &modelTx)

	if err != nil {
		return types.ResponseDeliverTx{
			Code: codeTypeEncodingError,
			Log:  fmt.Sprint(err)}
	}

	nextRound := app.state.round + 1

	if modelTx.Round != nextRound {
		return types.ResponseDeliverTx{
			Code: codeTypeModelError,
			Log: fmt.Sprint(ErrBadRound)}
	}

	cid := modelTx.CID
	if app.state.historyModel[nextRound].ready == false {
		// fmt.Printf("initial struct")
		app.state.historyModel[nextRound] = Snapshot{ ready: true,
													  localModels: make( map[uint64]Model ),
													  update: make( map[uint64]bool )}
	}
	if app.state.historyModel[nextRound].update[cid] {
		return types.ResponseDeliverTx{
			Code: codeTypeModelError,
			Log: fmt.Sprint(ErrConflict)}
	}
	app.state.historyModel[nextRound].update[cid] = true
	app.state.historyModel[nextRound].localModels[cid] = Model(modelTx.Model)
	fmt.Printf("Debug1: %v\n", types.ResponseDeliverTx{Code: codeTypeOK})
	return types.ResponseDeliverTx{Code: codeTypeOK}
}

func (app *TicketStoreApplication) CheckTx(tx types.RequestCheckTx) types.ResponseCheckTx {
	return types.ResponseCheckTx{Code: codeTypeOK}
}

func (app *TicketStoreApplication) Commit() (resp types.ResponseCommit) {
	allClientsUpdate := true
	nextRound := app.state.round + 1

	//fmt.Printf("Update Status: \n")
	for i := 0 ; i < app.state.clientsNumber; i++ {
		//fmt.Printf("CID %d: %v\n", i, app.state.historyModel[nextRound].update[uint64(i)])
		if app.state.historyModel[nextRound].update[uint64(i)] == false {
			allClientsUpdate = false
		}
	}

	modelsNextRound := app.state.historyModel[nextRound].localModels

	if allClientsUpdate {
		app.state.aggregatedModel = AggregateModel(modelsNextRound, app.state.clientsNumber)
		app.state.round++
	}

	app.state.height++
	return types.ResponseCommit{Data: []byte{0x00}}
}

func (app *TicketStoreApplication) Query(reqQuery types.RequestQuery) types.ResponseQuery {
	switch reqQuery.Path {
	case "round":
		return types.ResponseQuery{Value: []byte(fmt.Sprint(app.state.round))}
	case "model":
		return types.ResponseQuery{Value: []byte(fmt.Sprint(app.state.aggregatedModel))}
	case "clients":
		return types.ResponseQuery{Value: []byte(fmt.Sprint(app.state.clientsNumber))}
	default:
		return types.ResponseQuery{Log: fmt.Sprintf("Invalid query path. Expected hash, tx or ticket, got %v", reqQuery.Path)}
	}
}

func AggregateModel(localModels map[uint64]Model, clientsNumber int) (Model) {
	return localModels[0]
}
