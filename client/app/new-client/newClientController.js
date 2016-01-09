// TO DO:
// 1. Detect UserID from the AppState and put it in the ClientsApi.addOne()

angular.module('client-recon.newclient', [])

.controller('NewClientController', function ($scope, $timeout, ClientsApi, AppState) {
  // TEMPLATE FOR DATA
  this.data = {
    name:'',
    email: '',
    birthday: '',
    company: ''
  };

  var successfulPost = this.success;

  var newClient = this.data;

  this.postClient = function () {

    ClientsApi.addOne( ***** User ID *******,newClient).then(function(res){
      // CALLED AFTER SUCCESSFUL POST
      successfulPost = true;
      newClient.name = '';
      newClient.email = '';
      newClient.birthday = '';
      newClient.company = '';

      // THE PURPOSE OF THE BELOW IS TO HAVE THE SUCCESSFUL POST 
      // NOTIFICATION ONLY SHOW FOR A FEW SECONDS AND DISAPPEAR
      $timeout(function(){
        successfulPost = false;
      }, 2000);

    })

  };


  });
