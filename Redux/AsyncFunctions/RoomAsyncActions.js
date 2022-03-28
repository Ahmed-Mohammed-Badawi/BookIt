function getRoomsPending(state, action) {
    return {
        ...state,
        isPending: true,
    };
}

function getRoomsSuccess(state, action) {
    return {
        isPending: false,
        ...action.payload,
    };
}

function getRoomsFailed() {
    return {
        error: "Something Went Wrong! :(",
    };
}

export { getRoomsPending, getRoomsSuccess, getRoomsFailed };
