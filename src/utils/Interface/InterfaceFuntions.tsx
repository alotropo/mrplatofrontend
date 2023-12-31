import { Dispatch } from "react";
import { AddHypothesisOnlyAddProps, AddHypothesisRuleProps, RemoveHypothesisProps, SelectFormProps, add_hypothesis_only_add_api, add_hypothesis_rule, applyRuleInputProps, applyRuleOutputProps, apply_rule_router, getOptionProps, get_options_selected_form, reduce_absurde, rem_hypothesis, selected_form } from "../../api/Mrplato.api";
import { prove_validation, select_form_validation } from "../../validations/interface/InterfaceValidation"
import { ADD_NEW_LINE_TO_LIST, GET_OPTIONS_SELECTED_FORM, REMOVE_METHOD_AND_CHANGE_NEW_LIST } from "../../api/types";
import { mergeLists } from "./merge_rows";
import { type_rule } from "./type_rule";


export interface FeedBackAlerteInterface{
  setFeedbackTypeAlert: React.Dispatch<React.SetStateAction<string>>,
  setFeedbackMessageAlert: React.Dispatch<React.SetStateAction<string>>
  setOpenFeedbackAlert: React.Dispatch<React.SetStateAction<boolean>>
}


export interface SelectRowAndRuleInterface {
  selectedRule: number;
  selectedRows: number[];
}

export interface AlertInterface {
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setMessageAlert: React.Dispatch<React.SetStateAction<string>>;
}

export interface RestartInterface {
  setSelectedRows: React.Dispatch<React.SetStateAction<Array<string>>>,
  setSelectedRule: React.Dispatch<React.SetStateAction<string>>,
}

export interface ProveProps extends 
FeedBackAlerteInterface, 
SelectRowAndRuleInterface, 
SelectRowAndRuleInterface, 
AlertInterface,
RestartInterface
{

  dispatch: Dispatch<any>
  stateMrplato:any
  selectedRuleIndex: number
  buttonActiveRule: any
 }



export interface selectFormsProps extends 
FeedBackAlerteInterface, 
SelectRowAndRuleInterface, 
SelectRowAndRuleInterface, 
AlertInterface,
RestartInterface
{
  setOpenTableSelectForm: React.Dispatch<React.SetStateAction<boolean>>;
  optionSelectedForm: number,
  selectedRuleIndex: any,
  stateMrplato: any

  
 }
 export interface openSelectFormsProps extends SelectRowAndRuleInterface, AlertInterface{
  setOpenTableSelectForm: React.Dispatch<React.SetStateAction<boolean>>;

}


export const alert = (
    setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>,
    setMessageAlert: React.Dispatch<React.SetStateAction<string>>,
    message: string
  ): void => {
    setMessageAlert(message);
    setOpenAlert(true);
  };


export const prove = (props: ProveProps): void => {
    const { 
        selectedRule,
        selectedRows,
        setOpenAlert, 
        setMessageAlert, 
        setSelectedRows, 
        setSelectedRule, 
        setFeedbackTypeAlert, 
        setFeedbackMessageAlert,
        setOpenFeedbackAlert,
        dispatch,
        stateMrplato,
        selectedRuleIndex,
        buttonActiveRule

    } = props;
  
    const validate = prove_validation(String(selectedRule), selectedRows)

    if (validate.status) {
      let rows:{content: string, type: string, methods_used_info: string}[] = mergeLists(stateMrplato.list_propositions.list, stateMrplato.new_lines_list)
      
      const props_apply_rule_router: applyRuleInputProps = {
        
          rows: rows,
          index_selected_rows: selectedRows,
          selected_rule_data: {
            type: type_rule[Number(buttonActiveRule) - 1],
            index_selected_rule: selectedRuleIndex
          
      }}

      apply_rule_router(props_apply_rule_router, dispatch).then((result) => {
        if(result && result.type_output === "PROVED"){
          setFeedbackTypeAlert("Success")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
          dispatch({ type: ADD_NEW_LINE_TO_LIST, payload: result.new_line });

        }else if(result && result.type_output === "CREATED"){
          setFeedbackTypeAlert("Info")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
          dispatch({ type: ADD_NEW_LINE_TO_LIST, payload: result.new_line });
          
        }else if(result && result.type_output === "ERROR"){
          setFeedbackTypeAlert("Error")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
        }

      })  


    }else{
        alert(setOpenAlert, setMessageAlert, validate.message);
    }
  };


  export const restart = (
    setSelectedRows: React.Dispatch<React.SetStateAction<Array<any>>>,
    setSelectedRule: React.Dispatch<React.SetStateAction<any>>
  ) =>{
    setSelectedRows([])
    setSelectedRule(null)
  }


  export const openTableSelectFormFunction = (props: openSelectFormsProps, dispatch:any): void => {
    const { 
      selectedRule,
      selectedRows,
      setOpenAlert,
      setMessageAlert,
      setOpenTableSelectForm
  } = props;
  const validate = select_form_validation(String(selectedRule), selectedRows)

  if(validate.status){
    
      const props: getOptionProps = {
        rows: [{content: "", type: "", methods_used_info: ""}],
        selected_row_index: 2
      } 
      get_options_selected_form(props).then(result => {
        dispatch({ type: GET_OPTIONS_SELECTED_FORM, payload: result.options });

      })
      setOpenTableSelectForm(true)
  }else{
    alert(setOpenAlert, setMessageAlert, validate.message);
    
  }
}
  
  export const selectFormFunction = (props: selectFormsProps,dispatch:any): void => {
    const { 
        selectedRule,
        selectedRows,
        setOpenAlert, 
        setMessageAlert, 
        setSelectedRows, 
        setSelectedRule, 
        setFeedbackTypeAlert, 
        setFeedbackMessageAlert,
        setOpenFeedbackAlert,
        setOpenTableSelectForm,
        optionSelectedForm,
        selectedRuleIndex,
        stateMrplato
    } = props;
  
    const validate = prove_validation(String(selectedRule), selectedRows)

    if (validate.status) {
      let rows:{content: string, type: string, methods_used_info: string}[] = mergeLists(stateMrplato.list_propositions.list, stateMrplato.new_lines_list)

      const props_selected_form: SelectFormProps = {
        rows: rows,
        index_option: optionSelectedForm,
        selected_row_index: selectedRows[0],
        selected_rule_index: selectedRuleIndex,
    }

      selected_form(props_selected_form).then((result)=>{
        if(result && result.type_output === "PROVED"){
          setFeedbackTypeAlert("Success")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
          dispatch({ type: ADD_NEW_LINE_TO_LIST, payload: result.new_line });

        }else if(result && result.type_output === "CREATED"){
          setFeedbackTypeAlert("Info")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
          dispatch({ type: ADD_NEW_LINE_TO_LIST, payload: result.new_line });
          
        }else if(result && result.type_output === "ERROR"){
          setFeedbackTypeAlert("Error")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
        }
      })

      setOpenTableSelectForm(true)
      
    }else{
        alert(setOpenAlert, setMessageAlert, validate.message);

    }
  };




  export const addHypothesisOnlyAddFunction = (props: any ,dispatch:any): void => {
    const { 
        setFeedbackTypeAlert, 
        setFeedbackMessageAlert,
        setOpenFeedbackAlert,
        inputTextInputForm,
        selectedRuleIndex
    } = props;
  
    

      const props_add_hypothesis_only_add_props: AddHypothesisOnlyAddProps = {
        input_data: inputTextInputForm,
        selected_rule_index: selectedRuleIndex
    }

      add_hypothesis_only_add_api(props_add_hypothesis_only_add_props).then((result)=>{
       if(result && result.type_output === "CREATED"){
          setFeedbackTypeAlert("Info")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
          dispatch({ type: ADD_NEW_LINE_TO_LIST, payload: result.new_line });
          
        }else if(result && result.type_output === "ERROR"){
          setFeedbackTypeAlert("Error")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
        }
      })

  };

  export const addHypothesisRuleFunction = (props: any, dispatch:any): void => {
    const { 
        selectedRule,
        selectedRows,
        setOpenAlert, 
        setMessageAlert, 
        setFeedbackTypeAlert, 
        setFeedbackMessageAlert,
        setOpenFeedbackAlert,
        stateMrplato,
        inputTextInputForm,
        selectedRuleIndex,
        

    } = props;
  
    const validate = prove_validation(String(selectedRule), selectedRows)

    if (validate.status) {
      
      let row:{content: string, type: string, methods_used_info: string}[] = mergeLists(stateMrplato.list_propositions.list, stateMrplato.new_lines_list)
      
      const props_add_hypothesis_rule_props: AddHypothesisRuleProps = {
          rows: row,
          index_selected_row: selectedRows[0],
          selected_rule_index: selectedRuleIndex,
          input_data: inputTextInputForm
        }
      add_hypothesis_rule(props_add_hypothesis_rule_props).then((result) => {
        if(result && result.type_output === "PROVED"){
          setFeedbackTypeAlert("Success")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
          dispatch({ type: ADD_NEW_LINE_TO_LIST, payload: result.new_line });

        }else if(result && result.type_output === "CREATED"){
          setFeedbackTypeAlert("Info")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
          dispatch({ type: ADD_NEW_LINE_TO_LIST, payload: result.new_line });
          
        }else if(result && result.type_output === "ERROR"){
          setFeedbackTypeAlert("Error")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
        }

      })  


    }else{
        alert(setOpenAlert, setMessageAlert, validate.message);
    }
  };



  
  export const removeHypothesisFunction = (props: any ,dispatch:any): void => {
    const { 
        setFeedbackTypeAlert, 
        setFeedbackMessageAlert,
        setOpenFeedbackAlert,
        stateMrplato,

    } = props;
  

      const props_remove_hypothesis: RemoveHypothesisProps = {
        rows_created: stateMrplato.new_lines_list,
    }

      rem_hypothesis(props_remove_hypothesis).then((result)=>{
        if(result && result.type_output === "PROVED"){
          setFeedbackTypeAlert("Success")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
          dispatch({ type: REMOVE_METHOD_AND_CHANGE_NEW_LIST, payload: result });
          dispatch({ type: ADD_NEW_LINE_TO_LIST, payload: result.new_line });


        }else if(result && result.type_output === "CREATED"){
          setFeedbackTypeAlert("Info")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
          dispatch({ type: REMOVE_METHOD_AND_CHANGE_NEW_LIST, payload: result });
          dispatch({ type: ADD_NEW_LINE_TO_LIST, payload: result.new_line });

          
        }else if(result && result.type_output === "ERROR"){
          setFeedbackTypeAlert("Error")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
        }
      })

  };


  export const reduceAbsurdeFunction = (props: any ,dispatch:any): void => {
    const { 
        setFeedbackTypeAlert, 
        setFeedbackMessageAlert,
        setOpenFeedbackAlert,
        stateMrplato,

    } = props;
  

      const props_reduce_absurd: RemoveHypothesisProps = {
        rows_created: stateMrplato.new_lines_list,
    }

    reduce_absurde(props_reduce_absurd).then((result)=>{
        if(result && result.type_output === "PROVED"){
          setFeedbackTypeAlert("Success")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
          dispatch({ type: REMOVE_METHOD_AND_CHANGE_NEW_LIST, payload: result });
          dispatch({ type: ADD_NEW_LINE_TO_LIST, payload: result.new_line });


        }else if(result && result.type_output === "CREATED"){
          setFeedbackTypeAlert("Info")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
          dispatch({ type: REMOVE_METHOD_AND_CHANGE_NEW_LIST, payload: result });
          dispatch({ type: ADD_NEW_LINE_TO_LIST, payload: result.new_line });

          
        }else if(result && result.type_output === "ERROR"){
          setFeedbackTypeAlert("Error")
          setFeedbackMessageAlert(result.message)
          setOpenFeedbackAlert(true)
        }
      })

  };