var rIndex,
                table = document.getElementById("table");
            
            // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                    srNo = document.getElementById("srno").value,
                    task = document.getElementById("task").value,
                    des = document.getElementById("des").value;
            
                if(srNo === ""){
                    alert("Sr.No Connot Be Empty");
                    isEmpty = true;
                }
                else if(task === ""){
                    alert("Task Connot Be Empty");
                    isEmpty = true;
                }
                else if(des === ""){
                    alert("Description Connot Be Empty");
                    isEmpty = true;
                }
                return isEmpty;
            }
            
            // add Row
            function addHtmlTableRow()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    srNo = document.getElementById("srno").value;
                    task = document.getElementById("task").value,
                    des = document.getElementById("des").value,
                    
            
                cell1.innerHTML = srNo;
                cell2.innerHTML = task;
                cell3.innerHTML = des;
                // call the function to set the event to the new row
                selectedRowToInput();
            }
            }
            
            // display selected row data into input text
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("srno").value = this.cells[0].innerHTML;
                      document.getElementById("task").value = this.cells[1].innerHTML;
                      document.getElementById("des").value = this.cells[2].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var fname = document.getElementById("srno").value,
                    lname = document.getElementById("task").value,
                    age = document.getElementById("des").value;
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = srNo;
                table.rows[rIndex].cells[1].innerHTML = task;
                table.rows[rIndex].cells[2].innerHTML = des;
              }
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // clear input text
                document.getElementById("srno").value = "";
                document.getElementById("task").value = "";
                document.getElementById("des").value = "";
            }