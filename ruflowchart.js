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

    function addOpTrueFalseOutputs(title) {
        console.log('create true/false outputs');
        var outputs = {
            output_1: {
                label: 'True'
            },
            output_2: {
                label: 'False'
            }
        };
        return addOp(title, outputs);
    };

    function addOp(title, outputs) {
        console.log('adding operator');
        var opdata = {
            top: 0,
            left: $('#body').width() / 2,
            properties: {
                title: title,
                inputs: {
                    ins: {
                        label: 'Input (:i)',
                        multiple: true
                    }
                },
                outputs: outputs
            }
        };
        return $flowchart.flowchart('addOperator', opdata);
    };

    function addLoopLink(opId) {
        console.log('adding loop link from output_1 to ins');
        var linkdata = {
            fromOperator: opId,
            fromConnector: 'output_1',
            fromSubconnector: 0,
            toOperator: opId,
            toConnector: 'ins',
            toSubconnector: 0
        };
        return $flowchart.flowchart('addLink', linkdata);
    };

    $('.buttonStatement').click(function() {
        console.log('create statement');
        var outputs = {
            output_1: {
                label: 'Output'
            }
        };
        addOp('Statement', outputs);
    });

    $('.buttonIf').click(function() {
        console.log('create if');
        addOpTrueFalseOutputs('If');
    });

    $('.buttonWhile').click(function() {
        console.log('create while');
        var opId = addOpTrueFalseOutputs('While');
        addLoopLink(opId);
    });

    $('.buttonForEach').click(function() {
        console.log('create for each');
        var opId = addOpTrueFalseOutputs('For each');
        addLoopLink(opId);
    });

    $('.buttonDelete').click(function() {
        console.log('delete');
        $flowchart.flowchart('deleteSelected');
    });

});

