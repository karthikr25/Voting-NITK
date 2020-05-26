const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
	post: { type: String },
	name: { type: String },
	vote: { type: Number }
    //total: { type: String, required: true},
    //content: { type: String, required: true}
});

module.exports = mongoose.model('Candidate',candidateSchema);
//var CR = mongoose.model('Cr',branchSchema);

/*var cand1 = new Cr({post: "csecr", name: 'Candidate1', vote: 0 });
var cand2 = new Cr({post: "csecr", name: 'Candidate2', vote: 0 });
var NoOne = new Cr({post: "csecr", name: 'None', vote: 0 });
*/
//module.exports CR;
//module.exports = mongoose.model('Cr',branchSchema);