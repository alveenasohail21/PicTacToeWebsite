/**
 * @ngdoc service
 * @name app.auth.auth
 * @description < description placeholder >
 */

(function(){
    'use strict';
    angular
        .module('app.auth')
        .factory('authFactory', authFactory);

    function authFactory($q, alertFactory, $auth, userFactory, $localStorage, $state, $timeout, Restangular, restFactory, $rootScope){
        var socialLoader=[];
        /* Return Functions */
        return {
            login: login,
            signup:signup,
            socialAuthenticate: socialAuthenticate,
            logout: logout,
            forgotEmailSend: forgotEmailSend,
            resetPassword: resetPassword,
            checkToken: checkToken,
            socialDisconnect: socialDisconnect,
            socialLoader: socialLoader,
            loadLoader: loadLoader
        };

        /* Define Fuctions */
        function login(user){
            var defer = $q.defer();
            $auth.login(user)
                .then(function(resp){
                    if(resp.data.success){
                        // remove the token saved by $auth, as its throwing 'Uncaught Syntax error'
                        $auth.removeToken();
                        $localStorage.token = resp.data.token;
                        Restangular.setDefaultHeaders({'token': 'Bearer {'+ $localStorage.token +'}'});
                        userFactory.createUserInLocal(resp.data.data);
                        alertFactory.success(null, resp.data.message);
                        $timeout(function(){
                            window.globalLoader.hide();
                            if(eventChannel.has('login')){
                                eventChannel.fire('login');
                            }
                            else{
                                $('#loginModal').modal('hide');
                            }
                            // $state.go('Layout');
                        },1500);
                    }
                    else{
                        alertFactory.error(null, resp.data.message);
                        window.globalLoader.hide();
                    }
                    defer.resolve(resp);
                }, function(err){
                    alertFactory.error(null,err.data.message);
                    defer.reject(err);
                    window.globalLoader.hide();
                });
            return defer.promise;
        }

        function signup(user){
            var defer = $q.defer();
            console.log("testing");
            $auth.signup(user)
                .then(function(resp){
                    console.log(resp);
                    if(resp.data.success){
                        // remove the token saved by $auth, as its throwing 'Uncaught Syntax error'
                        $auth.removeToken();
                        $localStorage.token = resp.data.token;
                        Restangular.setDefaultHeaders({'token': 'Bearer {'+ $localStorage.token +'}'});
                        userFactory.createUserInLocal(resp.data.data);
                        alertFactory.success(null,resp.data.message);
                        $timeout(function(){
                            window.globalLoader.hide();
                            if(eventChannel.has('login')){
                                eventChannel.fire('login');
                            }
                            else{
                                $('#signupModal').modal('hide');
                            }
                            // $state.go('Layout');
                        },1500);
                    }
                    else{
                        alertFactory.error(null,resp.data.message);
                        window.globalLoader.hide();
                    }
                    defer.resolve(resp);
                }, function(err){
                    alertFactory.error(null,err.data.message);
                    defer.reject(err);
                    window.globalLoader.hide();
                });
            return defer.promise;
        }
        function loadLoader(provider){
            // socialLoader[provider]=true;
        }
        function socialAuthenticate(provider){
            $('#loader-social').css("display", "inline");
            $('.login-div').css("display", "none");

            console.log("auth factory social authenticate provider: ", provider);
            var defer = $q.defer();
            //console.log($auth.getToken().slice(1, $auth.getToken().length-1));
            $auth.authenticate(provider, ($auth.isAuthenticated()?{'token':$localStorage.token}:{}))
                .then(function(resp){
                    console.log(resp);
                    if(resp.data.success){
                        alertFactory.success(null,resp.data.message);
                        // remove the token saved by $auth, as its throwing 'Uncaught Syntax error'
                        $auth.removeToken();
                        delete $localStorage.token;
                        $timeout(function(){
                            console.log("SAVING TOKEN TO LOCAL STORAGE");
                            $localStorage.token = resp.data.token;
                            $localStorage.savier = 'xyz';
                            window.globalLoader.hide();

                        }, 2000);
                        //$localStorage.$reset();
                        // user signup through social provider
                        if(!userFactory.getUserFromLocal()){
                            console.log("User signup through social provider");
                            console.log(resp.data.data);
                            Restangular.setDefaultHeaders({'token': 'Bearer {'+ resp.data.token +'}'});
                            userFactory.createUserInLocal(resp.data.data);
                            $timeout(function(){
                                // $state.go('Layout');
                                window.globalLoader.hide();

                            },2500);
                        }
                        // user linked social platform
                        else{
                            if($rootScope.user['activeSocialProfiles']){
                                $rootScope.user['activeSocialProfiles'].push(provider);
                            }
                            else{
                                $rootScope.user['activeSocialProfiles'] = [provider];
                            }
                            // event with social data
                            console.log(resp.data.data);
                            $rootScope.$emit('socialAuthenticate', resp.data.data);
                            window.globalLoader.hide();

                        }
                    }
                    else{
                        alertFactory.error(null, resp.data.message);
                        window.globalLoader.hide();
                    }
                    defer.resolve(resp);
                    $('#loader-social').css("display", "none");
                    $('.login-div').css("display", "inline");
                    window.globalLoader.hide();
                }, function(err){
                    alertFactory.error(null,err.data.message);
                    defer.reject(err);
                    $('#loader-social').css("display", "none");
                    $('.login-div').css("display", "inline");
                    window.globalLoader.hide();
                });
            return defer.promise;
        }

        function logout(){
            $auth.removeToken();
            $rootScope.$emit('logout');
            window.globalLoader.hide();
            $state.go('Landing',{}, {reload: true});
        }

        function forgotEmailSend(email){
            var deffered = $q.defer();
            if(email){
                restFactory.auth.forgotEmailSend(email)
                    .then(function (resp){
                        if(resp.success){
                            alertFactory.success(null,resp.message);
                            deffered.resolve(resp);
                        }
                        else{
                            alertFactory.error(null,resp.message);
                            deffered.reject(resp);
                        }
                    }, function(err){
                        alertFactory.error(null,err.data.message);
                        deffered.reject(err);
                    })
            }
            return deffered.promise;
        }
        function resetPassword(password, retypedPassword){
            var deffered = $q.defer();

            restFactory.auth.resetPassword($rootScope.token, password, retypedPassword)
                .then(function (resp){
                    if(resp.success){
                        alertFactory.success(null,resp.message);
                        deffered.resolve(resp);
                        $rootScope.token=null;
                    }
                    else{
                        alertFactory.error(null,resp.message);
                        deffered.reject(resp);
                        $rootScope.token=null;
                        $state.go('Landing');
                    }
                }, function(err){
                    alertFactory.error(null,err.data.message);
                    deffered.reject(err);
                    $rootScope.token=null;
                    $state.go('Landing');
                });
            return deffered.promise;
        }

        function checkToken(token){
            var deffered = $q.defer();

            restFactory.auth.checkToken(token)
                .then(function (resp){
                    if(resp.success){
                        alertFactory.success(null,resp.message);
                        deffered.resolve(resp);
                    }
                    else{
                        alertFactory.error(null,resp.message);
                        deffered.reject(resp);
                    }
                }, function(err){
                    alertFactory.error(null,err.data.message);
                    deffered.reject(err);
                });
            return deffered.promise;
        }

        //disconnect social login in step 1
        function socialDisconnect(platform) {
            var deferred = $q.defer();
            restFactory.auth.socialDisconnect(platform).then(function(resp){
                console.log(resp);
                if(resp.success){
                    userFactory.removeSocialProfile(platform);
                    alertFactory.success(null,resp.message);
                }
                deferred.resolve(resp);
                window.globalLoader.hide();
            });
            return deferred.promise;
        }
    }

}());
