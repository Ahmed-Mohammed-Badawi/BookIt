//Success
export const getDetailsSuccess = (state, action) => {
    return { ...action.payload };
};

//Fails
export const getDetailsFail = (state, action) => {
    return {
        error: "Getting the Page Details Went Wrong :(",
    };
};
