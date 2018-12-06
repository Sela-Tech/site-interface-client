import actions from "./actions";
import randomcolor from 'randomcolor';

const init = {
    evidence: [],
    selected_from_map:{},
    selected_image: "",
    showModal: false,
    type:"",
    message:""
}

export default (state=init,payload)=>{
switch (payload.type) {
        
        case actions.SELECT_EVIDENCE_FROM_MAP:
        return  {
            ...state,
            type: actions.SELECT_EVIDENCE_FROM_MAP,
            selected_from_map: state.evidence.filter(v=>{
                return v.id === payload.selected
            })[0]
        }

        case actions.CLOSE_MODAL:
        return {
            ...state,
            type:actions.CLOSE_MODAL,
            showModal: false
        }

        case actions.SELECT_IMAGE_FROM_SIDEBAR:
        return  {
            ...state,
            type: actions.SELECT_IMAGE_FROM_SIDEBAR,
            showModal: true,
            selected_image: state.selected_from_map.images.filter((v,i)=>{
                return i === payload.selected
            })[0]
        }

        case actions.FETCH_EVIDENCE_REQUEST:
        return  {
            ...state,
            type: actions.FETCH_EVIDENCE_REQUEST
        }

        case actions.FETCH_EVIDENCE_SUCCESSFUL:
        return  {
            ...state,
            type: actions.FETCH_EVIDENCE_SUCCESSFUL,
            evidence: payload.evidence.map(e=>{
                return {
                    id: e._id,
                    images: e.images||[],
                    main_image_src: "https://s3.amazonaws.com/iracks-dump/"+ e.evidence_name,
                    name: e.site_name || "No Site Name Given.",
                    datetime:e.datetime,
                    author: e.author,

                    backgroundColor: randomcolor(),
                    location:{
                        lat: e.latitude,
                        lng: e.longitude
                    }
                }
            })
        }

        case actions.FETCH_EVIDENCE_FAILED:
        return  {
            ...state,
            type: actions.FETCH_EVIDENCE_FAILED
        }
        
    default:
        return state;
}
}