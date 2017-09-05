// TODO: refactor, add functionality like renaming, multiple connectors,
// exporting to svg etc
$(document).ready(function() {
    var data = {
        operators: {
            operator1: {
                top: 0,
                left: 0,
                properties: {
                    title: 'Start',
                    inputs: {},
                    outputs: {
                        output_1: {
                            label: 'Output'
                        }
                    }
                }
            },
            operator2: {
                top: 0,
                left: $('#body').width() - 150,
                properties: {
                    title: 'Stop',
                    inputs: {
                        ins: {
                            label: 'Input (:i)',
                            multiple: true
                        }
                    },
                    outputs: {}
                }
            }
        }
    };

    // Apply the plugin on a standard, empty div...
    var $flowchart = $('#flowchart');
    $flowchart.flowchart({
      data: data
    });

    var operator_n = 0
    $('.buttonStatement').click(function() {
        console.log('create statement');
        operatorId = 'created_operator_' + operator_n;
        data = {
            top: 0,
            left: $('#body').width() / 2,
            properties: {
                title: 'Statement',
                inputs: {
                    input_1: {
                        label: 'Input'
                    }
                },
                outputs: {
                    output_1: {
                        label: 'Output'
                    }
                }
            }
        };
        operator_n++;
        $flowchart.flowchart('createOperator', operatorId, data);
    });

    $('.buttonIf').click(function() {
        console.log('create if');
        operatorId = 'created_operator_' + operator_n;
        data = {
            top: 0,
            left: $('#body').width() / 2,
            properties: {
                title: 'If condition',
                inputs: {
                    input_1: {
                        label: 'Input'
                    }
                },
                outputs: {
                    output_1: {
                        label: 'True'
                    },
                    output_2: {
                        label: 'False'
                    }
                }
            }
        };
        operator_n++;
        $flowchart.flowchart('createOperator', operatorId, data);
    });

    $('.buttonWhile').click(function() {
        console.log('create while');
        operatorId = 'created_operator_' + operator_n;
        data = {
            top: 0,
            left: $('#body').width() / 2,
            properties: {
                title: 'While condition',
                inputs: {
                    input_1: {
                        label: 'Input'
                    },
                    input_2: {
                        label: 'Loop'
                    }
                },
                outputs: {
                    output_1: {
                        label: 'True'
                    },
                    output_2: {
                        label: 'False'
                    }
                }
            }
        };
        operator_n++;
        $flowchart.flowchart('createOperator', operatorId, data);
    });

    $('.buttonForEach').click(function() {
        console.log('create for each');
        operatorId = 'created_operator_' + operator_n;
        data = {
            top: 0,
            left: $('#body').width() / 2,
            properties: {
                title: 'For each',
                inputs: {
                    input_1: {
                        label: 'Input'
                    },
                    input_2: {
                        label: 'Loop'
                    }
                },
                outputs: {
                    output_1: {
                        label: 'True'
                    },
                    output_2: {
                        label: 'False'
                    }
                }
            }
        };
        operator_n++;
        $flowchart.flowchart('createOperator', operatorId, data);
    });

    $('.buttonDelete').click(function() {
        console.log('delete');
        $flowchart.flowchart('deleteSelected');
    });

});

