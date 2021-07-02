// const net = require('net');

// const server = net.createServer();

// server.on('close', function() {
//   console.log('Server closed !');
// });

// server.on('connection', function(socket) {
//   console.log('Buffer size : ' + socket.bufferSize);

//   console.log('---------server details -----------------');

//   const adress = server.address()
//   const port = adress.port;
//   const family = adress.family;
//   const ipaddr = adress.address;

//   console.log('Server is listening at port' + port);
//   console.log('Server ip :' + ipaddr);
//   console.log('Server is IP4/IP6 : ' + family);

//   const lport = socket.localPort;
//   const laddr = socket.localAddress;
//   console.log('Server is listening at LOCAL port' + lport);
//   console.log('Server LOCAL ip :' + laddr);

//   console.log('------------remote client info --------------');

//   const rport = socket.remotePort;
//   const raddr = socket.remoteAddress;
//   const rfamily = socket.remoteFamily;

//   console.log('REMOTE Socket is listening at port' + rport);
//   console.log('REMOTE Socket ip :' + raddr);
//   console.log('REMOTE Socket is IP4/IP6 : ' + rfamily);
//   console.log('--------------------------------------------');
// })

const binaryTree = {
  value: 12,
  left: {
    value: 2,
    left: {},
  },
  right: {
    value: 10,
    left: {
      value: 5,
    },
    right: {
      value: 7,
    },
  },
};

function sumTreeValues(tree) {
  let sum = tree.value ? tree.value : 0;

  if (tree.left) {
    sum += sumTreeValues(tree.left);
  }
  if (tree.right) {
    sum += sumTreeValues(tree.right);
  }

  return sum;
}
let result = sumTreeValues(binaryTree);

// console.log(result); // 12 + 2 + 10 + 5 + 7 = 36

// function summTreeValues(tree) {
//   let sumValues = tree.value ? tree.value : 0;

//   if (tree.left) {
//     sum += summTreeValues(tree.left);
//   }
//   if (tree.right) {
//     sum += sumTreeValues(tree.right);
//   }
//   return sumValues;
// }

let data = {
  newItem: {
    title: "",
    description: "",
    branchoffice_id: 1,
    type_service_id: 1,
    status: "active",
    price_type: "linear",
    client_type: "",
    prices: [],
    unlinear_price: [],
    rules: [],
  },
};

function AddRules(index) {
  if (data.newItem.rules[index]) {
    console.log("ichida bir nima bor");
  } else {
    // ichida hech narsa yuq
    let show = {
      showRules: true,
    };

    data.newItem.rules.push(show);
  }

  // else if (!data.newItem.rules[index]) {
  //   let show = {
  //     showRules: true,
  //   };
  //   data.newItem.rules.push(show);
  // }

  // console.log(data.newItem.rules[index].showRules);
  // data.newItem.rules[index].showRules = !data.newItem.rules[index].showRules;
  return data.newItem.rule;
}
console.log(AddRules(0));
