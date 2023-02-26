class PickListPOs{


    getGroupItem(){
        return cy.get('.list-group-item')
    }
   getDescription(){
       return cy.get('#Description')
   }
   getExpandList(){
    return cy.get('.jstree-ocl')
   }
   getAvailableOnPortal(){
       return cy.get('#IsAvailibaleOnPortal')
   }
   getActiveCheckBox(){
       return cy.get('#IsActive')
   }
   getSubmit(){
       return cy.get('[type="submit"]')
   }
   getTitle(){
       return cy.get('.ui-jqgrid-bdiv')
   }
    getPickListLink(){
    return cy.get('.page-content>.container-fluid>.row>.col-xl-3>.noBorder> .noPadding> .list-group> .list-group-item')
    }
    getExpandList(){
        return cy.get('#j1_1 > :nth-child(1)')
    }
    getList(){
        return cy.get('#j1_1')
    }
    getMainCRMMenuLink(){
        return cy.get(':nth-child(2) > .waves-effect')
    }
    getContactsLink(){
        return cy.get('.mm-show').contains('Contacts')
       //return cy.get('.mm-show > :nth-child(5) > a')
    }
    getSearch(){
        return cy.get('#SearchString')
    }
    getView(){
        return cy.get('#jqTable_frozen > tbody > .jqgrow>.td-action> :nth-child(1) > .custom-btns')
    }
    getProfiles(){
        return cy.get(':nth-child(3) > .col-md-12')
    }
    getProfilesCheckBox(){
        return cy.get('[id$=_anchor]')
    }
    

    getLookFor(){
        return cy.get(':nth-child(1) > .dropdown > .btn')
    }
    getLookingForText(){
        return cy.get(':nth-child(1) > .dropdown > div.dropdown-menu > .bs-searchbox')
        
    }
    getDropDownItems(){
       // return  cy.get('#bs-select-1-48')
       // return cy.get('#bs-select-1-36')
        return cy.get('[id^=bs-select-1-]')
    }
    getProfileListItem(){
        return cy.get('[id^=bs-select-4-]')
    }

    click_QB_AddDropDown(){
        return cy.get('.col-xl-12 > .dropdown > .btn').click()
       
    }

    QB_AddDropDown(){
        return cy.get('.col-xl-12 > .dropdown > .btn')

    }


    getAddDropDownSearchArea(){
        return cy.get('.col-xl-12 > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control')
    }
    getDropDown(){
        return cy.get('.dropdown-item')
    }
    getOperatorDropDownQB(){
        return cy.get('[id^=drpOperator_]')
    }
    getOperatorDropDown(){
        return cy.get('[id^=bs-select-5-]')
    }

    getTextValue(){
        return cy.get('[id^=txtValue_]')
        
    }
   
    getAlertOkBtn(){
        return cy.get('[aria-labelledby="ui-id-4"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button')
    }
    getSaveBtn(){
        return cy.get('.pt-3 > .btn-primary')
    }
    getMessage(){
        //return cy.get('[aria-labelledby="ui-id-5"] > #alertdlg')
        return cy.get('[aria-labelledby="ui-id-4"] > #alertdlg')
    }
    getOkButtonAlertProfile(){
        //return cy.get('[aria-labelledby="ui-id-5"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button')
       return cy.get('[aria-labelledby="ui-id-4"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button')
    }

    getCriteriaInput(){
        return cy.get('.criteria-input > a')
    }
    getAlertYesBtn(){
        return cy.get('.ui-dialog-buttonset > :nth-child(1)')
    }
    getGridRows(){
        return cy.get('#tbodyData').find('tr')
    }
    getRename(){
        return cy.get('.vakata-context-hover > a')
    }
    getRemove(){
        return cy.get('.vakata-context > :nth-child(3) > a')
    }
    getActionBtn(){
        return cy.get('#qbActionDropdownMenuButton')
    }
    getActionDropDown(){
        return cy.get('#ddlAction')
    }
   




}
export default PickListPOs