import ax from 'axios';
import actions from './actions';

export const fetchEvidence = ()=>{
    return dispatch=>{
        dispatch({type: actions.FETCH_EVIDENCE_REQUEST})
        ax({
            url: "https://sela-site-backend.now.sh/",
            method:"GET"
        }).then(res=>{
            dispatch({type: actions.FETCH_EVIDENCE_SUCCESSFUL, evidence: res.data })
        }).catch(res=>{
            dispatch({type: actions.FETCH_EVIDENCE_FAILED})
        })
    }
}

export const selectEvidence = (selected,type="map")=>{
    return {
        type: type === "map" ? actions.SELECT_EVIDENCE_FROM_MAP:actions.SELECT_IMAGE_FROM_SIDEBAR,
        selected
    }
}

export const closeModal   = ()=>{
return {
    type: actions.CLOSE_MODAL
}
}