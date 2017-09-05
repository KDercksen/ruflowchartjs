$(document).ready(function() {
    var data = {
      operators: {
        operator: {
          top: 500,
          left: 200,
          properties: {
            title: 'Operator',
            inputs: {
              input_1: {
                label: 'Input 1',
              },
              input_2: {
                label: 'Input 2',
              }
            },
            outputs: {
              output_1: {
                label: 'Output 1',
              },
              output_2: {
                label: 'Output 2',
              },
              output_3: {
                label: 'Output 3',
              }
            }
          }
        }
      }
    };

    // Apply the plugin on a standard, empty div...
    $('#flowchart').flowchart({
      data: data
    });
});
