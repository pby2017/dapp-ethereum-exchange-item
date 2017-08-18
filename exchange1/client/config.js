Accounts.ui.config({
//  passwordSignupFields: 'USERNAME_ONLY'

  /*extraSignupFields: [{
      fieldName: "username",
      fieldLabel: "username",
      inputType: 'text'
  }]*/

  extraSignupFields: [{
        fieldName: 'name',
        fieldLabel: 'name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'address',
        fieldLabel: 'Address',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your address");
            return false;
          } else {
            return true;
          }
        }
    }, {
          fieldName: 'bankname',
          fieldLabel: 'Bank name',
          inputType: 'text',
          visible: true
      }, {
          fieldName: 'accountnumber',
          fieldLabel: 'Account number',
          inputType: 'text',
          visible: true,
          validate: function(value, errorFunction) {
            if (!value) {
              errorFunction("Please write your wallet address");
              return false;
            } else {
              return true;
            }
          }
      }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});
