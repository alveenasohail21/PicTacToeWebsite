(function() {
    'use strict';
    angular
        .module('app.common')
        .factory('designTool', designTool);

    function designTool($timeout) {

        const canvasOrientations = {
            vertical: 'vertical',
            horizontal: 'horizontal'
        };
        const _canvasTypes = {
            REGULAR : {
                name : 'regular',
                sizes: {
                    small : {
                        name: 'small',
                        initial: 'S',
                        horizontal : {
                            width : {
                                px: 1800,
                                inches: 6
                            },
                            height : {
                                px: 1200,
                                inches: 4
                            },
                            title: {
                                inches: '6 x 4 inches'
                            }
                        },
                        vertical : {
                            width : {
                                px: 1200,
                                inches: 4
                            },
                            height : {
                                px: 1800,
                                inches: 6
                            },
                            title: {
                                inches: '4 x 6 inches'
                            }
                        }
                    },
                    medium : {
                        name: 'medium',
                        initial: 'M',
                        horizontal : {
                            width : {
                                px: 2100,
                                inches: 7
                            },
                            height : {
                                px: 1500,
                                inches: 5
                            },
                            title: {
                                inches: '7 x 5 inches'
                            }
                        },
                        vertical : {
                            width : {
                                px: 1500,
                                inches: 5
                            },
                            height : {
                                px: 2100,
                                inches: 7
                            },
                            title: {
                                inches: '5 x 7 inches'
                            }
                        }
                    },
                    large : {
                        name: 'large',
                        initial: 'L',
                        horizontal : {
                            width : {
                                px: 2400,
                                inches: 8
                            },
                            height : {
                                px: 1800,
                                inches: 6
                            },
                            title: {
                                inches: '8 x 6 inches'
                            }
                        },
                        vertical : {
                            width : {
                                px: 1800,
                                inches: 6
                            },
                            height : {
                                px: 2400,
                                inches: 8
                            },
                            title: {
                                inches: '6 x 8 inches'
                            }
                        }
                    }
                }
            },
            ENLARGE : {
                name :  'enlarge',
                sizes: {
                    small: {
                        name: 'small',
                        initial: 'S',
                        horizontal : {
                            width : {
                                px: 3600,
                                inches: 12
                            },
                            height : {
                                px: 2400,
                                inches: 8
                            },
                            title: {
                                inches: '12 x 8 inches'
                            }
                        },
                        vertical : {
                            width : {
                                px: 2400,
                                inches: 8
                            },
                            height : {
                                px: 3600,
                                inches: 12
                            },
                            title: {
                                inches: '8 x 12 inches'
                            }
                        }
                    },
                    medium : {
                        name: 'medium',
                        initial: 'M',
                        horizontal : {
                            width : {
                                px: 3600,
                                inches: 12
                            },
                            height : {
                                px: 3000,
                                inches: 10
                            },
                            title: {
                                inches: '12 x 10 inches'
                            }
                        },
                        vertical : {
                            width : {
                                px: 3000,
                                inches: 10
                            },
                            height : {
                                px: 3600,
                                inches: 12
                            },
                            title: {
                                inches: '10 x 12 inches'
                            }
                        }
                    },
                    large : {
                        name: 'large',
                        initial: 'L',
                        horizontal : {
                            width : {
                                px: 4800,
                                inches: 16
                            },
                            height : {
                                px: 3600,
                                inches: 12
                            },
                            title: {
                                inches: '16 x 12 inches'
                            }
                        },
                        vertical : {
                            width : {
                                px: 3600,
                                inches: 12
                            },
                            height : {
                                px: 4800,
                                inches: 16
                            },
                            title: {
                                inches: '12 x 16 inches'
                            }
                        }
                    }
                }
            },
            SQUARE : {
                name : 'square',
                sizes: {
                    small: {
                        name: 'small',
                        initial: 'S',
                        horizontal : {
                            width : {
                                px: 1200,
                                inches: 4
                            },
                            height : {
                                px: 1200,
                                inches: 4
                            },
                            title: {
                                inches: '4 x 4 inches'
                            }
                        },
                        vertical : {
                            width : {
                                px: 1200,
                                inches:4
                            },
                            height : {
                                px: 1200,
                                inches: 4
                            },
                            title: {
                                inches: '4 x 4 inches'
                            }
                        }
                    },
                    medium : {
                        name: 'medium',
                        initial: 'M',
                        horizontal : {
                            width : {
                                px: 1800,
                                inches: 6
                            },
                            height : {
                                px: 1800,
                                inches: 6
                            },
                            title: {
                                inches: '6 x 6 inches'
                            }
                        },
                        vertical : {
                            width : {
                                px: 1800,
                                inches: 6
                            },
                            height : {
                                px: 1800,
                                inches: 6
                            },
                            title: {
                                inches: '6 x 6 inches'
                            }
                        }
                    },
                    large : {
                        name: 'large',
                        initial: 'L',
                        horizontal : {
                            width : {
                                px: 2400,
                                inches: 8
                            },
                            height : {
                                px: 2400,
                                inches: 8
                            },
                            title: {
                                inches: '8 x 8 inches'
                            }
                        },
                        vertical : {
                            width : {
                                px: 2400,
                                inches: 8
                            },
                            height : {
                                px: 2400,
                                inches: 8
                            },
                            title: {
                                inches: '8 x 8 inches'
                            }
                        }
                    }
                }
            }
        };

        const Defaults = {
            zoom: 0,
            plusIconSizeForLayoutSections: 60,
            borderWidth: 8,
            stroke: 'rgb(101, 224, 228)',
            strokeWidth : 5,
            canvasType: 'square',
            canvasSize: 'small',
            canvasSizeOrientation: 'horizontal'
        };

        return{
            findItemSizeDetails: findItemSizeDetails
        };

        function getCanvasTypeBasedOnOrientation(image) {
            if(image.originalWidth === image.originalHeight){
                return Defaults.canvasType;
            }
            else {
                return _canvasTypes.REGULAR.name;
            }
        }

        function findItemSizeDetails(item){

            if(!item.isProduct){
                var canvasSizeDetails = {};
                // TYPE
                canvasSizeDetails.type = getCanvasTypeBasedOnOrientation(item);
                // SIZE
                canvasSizeDetails.size = Defaults.canvasSize;
                // ORIENTATION
                if(item.originalWidth < item.originalHeight) {
                    canvasSizeDetails.orientation = canvasOrientations.vertical;
                }
                else{
                    canvasSizeDetails.orientation = canvasOrientations.horizontal;
                }
                // Dimensions
                canvasSizeDetails.dimensions = _canvasTypes[canvasSizeDetails.type.toUpperCase()].sizes[canvasSizeDetails.size][canvasSizeDetails.orientation];

                item.canvasSizeDetails = canvasSizeDetails;
            }
            else{
                console.log(item.canvasSizeDetails);
                // Dimension
                item.canvasSizeDetails.dimensions = _canvasTypes[item.canvasSizeDetails.type.toUpperCase()].sizes[item.canvasSizeDetails.size][item.canvasSizeDetails.orientation];
            }

            return item.canvasSizeDetails;

        }

    }
}());