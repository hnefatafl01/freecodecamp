(function() {
    'use strict';

    angular.module('app')
        .component('home', {
            controller: homeController,
            template: `
                <div class="container">
                    <div class="tabs">
                      <div role="button" class="tab" ng-click="$ctrl.status='all';">all</div>
                      <div role="button" class="tab" ng-click="$ctrl.status='online';">online</div>
                      <div role="button" class="tab" ng-click="$ctrl.status='offline';">offline</div>
                    </div>
                    <div class="actions">
                      <div class="filters">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        <input class="search" type="text" name="search" ng-model="search"/>
                      </div>
                    </div>
                    <div class="list">
                        <div class="list-item" ng-repeat="user in $ctrl.users | filter:search | statusFilter:$ctrl.status">
                            <div class="list-item-thumbnail">
                                <img ng-if="user.stream.logo" class="list-item-img" ng-src="{{user.stream.logo}}" alt="user logo"/>
                                <h1 ng-if="user.error">{{user.status}}</h1>
                            </div>
                            <div class="list-item-content">
                                <h5 class="list-item-header">{{user.stream.display_name || user.display_name || user.error}}</h5>
                                <p class="list-item-body">{{user.stream.status || user.message}}</p>
                            </div>
                            <div class="list-item-status">
                                <i 
                                  ng-class="user.stream === null ? '' : 'online';"
                                  class="fa fa-twitch"
                                  aria-hidden="true">
                                </i>
                            </div>
                        </div>
                    <div>
                </div>
            `
        })

        // homeController.$inject = [];
        function homeController() {
            const vm = this;

            vm.$onInit = function() {
                console.log('home controller');
                vm.users = vm.fetchUsers();
                vm.status = 'all';
            }

            // vm.checkStatus = function() {
            //   switch(vm.status) {
            //     case 'all': return vm.user; 
            //     case 'online': if (vm.user.stream) { return vm.user }; 
            //     case 'offline': if (!vm.user.stream) break; 
            //     default: return vm.user;
            //   }
            // }
            
            vm.fetchUsers = function() {
                // let apiUrl = 'https://api.twitch.tv/kraken/streams/freecodecamp';
                // $http.defaults.headers.common['Accept'] = " application/vnd.twitchtv.v5+json";
                // $http.defaults.headers.common['Client_ID'] = '';
                // console.log($http.defaults.headers.common)
                // $http.get(apiUrl, {jsonpCallbackParam: 'callback'})
                //     .then((res) => {
                //         console.log(res);
                //     });
                return data;
            }

            const data = [
                {
                  "stream": {
                    "mature": false,
                    "status": "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
                    "broadcaster_language": "en",
                    "display_name": "FreeCodeCamp",
                    "game": "Creative",
                    "language": "en",
                    "_id": 79776140,
                    "name": "freecodecamp",
                    "created_at": "2015-01-14T03:36:47Z",
                    "updated_at": "2016-09-17T05:00:52Z",
                    "delay": null,
                    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
                    "banner": null,
                    "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
                    "background": null,
                    "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
                    "profile_banner_background_color": null,
                    "partner": false,
                    "url": "https://www.twitch.tv/freecodecamp",
                    "views": 161989,
                    "followers": 10048,
                    "_links": {
                      "self": "https://api.twitch.tv/kraken/channels/freecodecamp",
                      "follows": "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
                      "commercial": "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
                      "stream_key": "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
                      "chat": "https://api.twitch.tv/kraken/chat/freecodecamp",
                      "subscriptions": "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
                      "editors": "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
                      "teams": "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
                      "videos": "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
                    }
                  },
                  "_links": {
                    "self": "https://api.twitch.tv/kraken/streams/freecodecamp",
                    "channel": "https://api.twitch.tv/kraken/channels/freecodecamp"
                  }
                },
                {
                  "stream": null,
                  "display_name": "OgamingSC2",
                  "_links": {
                    "self": "https://api.twitch.tv/kraken/streams/ogamingsc2",
                    "channel": "https://api.twitch.tv/kraken/channels/ogamingsc2"
                  }
                },
                {
                  "stream": {
                    "mature": false,
                    "status": "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
                    "broadcaster_language": "en",
                    "display_name": "ESL_SC2",
                    "game": "StarCraft II",
                    "language": "en",
                    "_id": 30220059,
                    "name": "esl_sc2",
                    "created_at": "2012-05-02T09:59:20Z",
                    "updated_at": "2016-09-17T06:02:57Z",
                    "delay": null,
                    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
                    "banner": null,
                    "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
                    "background": null,
                    "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
                    "profile_banner_background_color": "#050506",
                    "partner": true,
                    "url": "https://www.twitch.tv/esl_sc2",
                    "views": 60843789,
                    "followers": 135275,
                    "_links": {
                      "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
                      "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
                      "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
                      "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
                      "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
                      "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
                      "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
                      "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
                      "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
                    }
                  },
                  "_links": {
                    "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
                    "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
                  }
                },
                {
                  "stream": null,
                  "display_name": "noobs2ninjas",
                  "_links": {
                    "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
                    "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
                  }
                },
                {
                  "error": "Not Found",
                  "status": 404,
                  "message": "Channel 'not-a-valid-account' does not exist"
                }
              ]
        }

        angular.module('app').filter('statusFilter', function () {
          return function (items, status) {
            var filtered = [];
            for (var i = 0; i < items.length; i++) {
              var item = items[i];
              if (status === 'all') {
                filtered.push(item);
              } else if (status === 'offline') {
                if (item.stream === null) {
                  filtered.push(item);
                }
              } else if (status === 'online') {
                if (item.stream !== null) {
                  filtered.push(item);
                }
              } else {
                return false;
              }
            }
            return filtered;
          };
        });
}());

