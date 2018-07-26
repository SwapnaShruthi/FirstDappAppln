//initialize web3
	if(typeof web3 !== 'undefined'){
		web3 = new Web3(web3.currentProvider);
	}
	else{
		web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
	}

//set account
	web3.eth.defaultAccount = web3.eth.accounts[0];

//set contract abi
	var contractAbi =[
	{
		"constant": true,
		"inputs": [],
		"name": "employeeName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			}
		],
		"name": "setEmployeeName",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

// set contract address
	var contractAddress ='0x8e0fd64458e6014fd9d01e18b98b93b44f6ae112';

// set contract
	var contract= web3.eth.contract(contractAbi).at(contractAddress);

//display employee name
	contract.employeeName(function(err, employeeName){
		$("#employeeName").text(employeeName);
	});

// update the employee name
	$("#updateEmpName").on("click",function(event){
		event.preventDefault();
		var empName = $("#updatedEmpName").val();
		contract.setEmployeeName(empName);
		$("#updatedEmpName").val('');
		location.reload();
	});