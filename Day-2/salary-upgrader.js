"use strict";
exports.__esModule = true;
var SalaryUpgrader = (function () {
    function SalaryUpgrader() {
    }
    SalaryUpgrader.prototype.incrementSalary = function (percentRaise, empList) {
        empList.map(function (emp) {
            var oldSalary = emp.getSalary();
            var newSalary = (oldSalary * percentRaise / 100) + oldSalary;
            emp.updateSalary(newSalary);
        });
    };
    SalaryUpgrader.prototype.addBonus = function (percentRaise, empList) {
        empList.map(function (emp) {
            var orginalSalary = emp.getSalary();
            var hikeSalary = (orginalSalary * percentRaise / 100) + orginalSalary;
            var newBonusSal = hikeSalary > 10000 ? hikeSalary + 1000 : hikeSalary + 500;
            emp.updateSalary(newBonusSal);
        });
    };
    return SalaryUpgrader;
}());
exports.SalaryUpgrader = SalaryUpgrader;
