studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [
    { name: "Bill", lastName: "Billson", permissionSlip: false},
    { name: "Bob", lastName: "Bobson", permissionSlip: false}
  ];

  factory.addStudent = function() {
debugger;
    var student = { name: factory.name, lastName: factory.lastName, permissionSlip: false };
    factory.students.push(student);
    factory.studentName = null;
  };

  factory.deleteStudent = function(student) {
    var index = factory.students.indexOf(student);
    factory.students.splice(index, 1);
  };
  return factory;
});
