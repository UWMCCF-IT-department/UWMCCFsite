var myApp = angular.module('myApp',[]);
myApp.controller(
	'PrayerController', 
	function($scope, prayerService){
		$scope.prayer_requests = [];

        $scope.form = {
            name: "",
            email: "",
            prayer_request: "",
        };

		loadRemoteData();
        // I process the add-friend form.
        $scope.addPrayerRequest = function() {

            // If the data we provide is invalid, the promise will be rejected,
            // at which point we can tell the user that something went wrong. In
            // this case, I'm just logging to the console to keep things very
            // simple for the demo.
            prayerService.addPrayerRequest( $scope.form.name, $scope.form.email, $scope.form.prayer_request )
                .then(
                    loadRemoteData,
                    function( errorMessage ) {
                        console.warn( errorMessage );
                    },
                    $('#myModal').modal('hide')
                )
            ;

            // Reset the form once values have been consumed.
            $scope.form.name = "";
            $scope.form.email = "";
            $scope.form.prayer_request = "";

        };

		function loadRemoteData() {
			prayerService.getPrayerRequest()
            	.then(
            		function( friends ) {
                        console.log("test")
            			$scope.prayer_requests = friends;
            		});
        }
	});

myApp.service(
    "prayerService",
    function( $http, $q ) {
        // Return public API.
        return({
            getPrayerRequest: getPrayerRequest,            
            addPrayerRequest: addPrayerRequest
        });
        // I get all of the friends in the remote collection.
        function getPrayerRequest() {

            var request = $http({
                method: "get",
                url: "/prayer-wall/api_v1/prayer-requests",
                params: {
                    action: "get"
                }
            });
            return( request.then( handleSuccess, handleError ) );
        }

        // I add a friend with the given name to the remote collection.
        function addPrayerRequest( name, email, prayer_request ) {

            var request = $http({
                method: "post",
                url: "/prayer-wall/api_v1/prayer-requests",
                params: {
                    action: "add"
                },
                data: {
                    name: name,
                    email: email,
                    prayer_request: prayer_request
                }
            });
            return( request.then( handleSuccess, handleError ) );

        }



        // ---
        // PRIVATE METHODS.
        // ---


        // I transform the error response, unwrapping the application dta from
        // the API response payload.
        function handleError( response ) {

            // The API response from the server should be returned in a
            // nomralized format. However, if the request was not handled by the
            // server (or what not handles properly - ex. server error), then we
            // may have to normalize it on our end, as best we can.
            if (
                ! angular.isObject( response.data ) ||
                ! response.data.message
                ) {

                return( $q.reject( "An unknown error occurred." ) );

            }

            // Otherwise, use expected error message.
            return( $q.reject( response.data.message ) );

        }


        // I transform the successful response, unwrapping the application data
        // from the API response payload.
        function handleSuccess( response ) {
            return( response.data );

        }

    }
);