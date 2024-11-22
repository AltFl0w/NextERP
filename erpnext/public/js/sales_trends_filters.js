// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

erpnext.get_sales_trends_filters = function () {
	return [
		{
			fieldname: "period",
			label: __("Period"),
			fieldtype: "Select",
			options: [
				{ value: "Monthly", label: __("Monthly") },
				{ value: "Quarterly", label: __("Quarterly") },
				{ value: "Half-Yearly", label: __("Half-Yearly") },
				{ value: "Yearly", label: __("Yearly") },
			],
			default: "Monthly",
		},
		{
			fieldname: "based_on",
			label: __("Based On"),
			fieldtype: "Select",
			options: [
				{ value: "Item", label: __("Item") },
				{ value: "Item Group", label: __("Item Group") },
				{ value: "Customer", label: __("Customer") },
				{ value: "Customer Group", label: __("Customer Group") },
				{ value: "Territory", label: __("Territory") },
				{ value: "Project", label: __("Project") },
			],
			default: "Item",
			dashboard_config: {
				read_only: 1,
			},
		},
		{
			fieldname: "group_by",
			label: __("Group By"),
			fieldtype: "Select",
			options: ["", { value: "Item", label: __("Item") }, { value: "Customer", label: __("Customer") }],
			default: "",
		},
		{
<<<<<<< HEAD
			fieldname: "fiscal_year",
			label: __("Fiscal Year"),
			fieldtype: "Link",
			options: "Fiscal Year",
			default: erpnext.utils.get_fiscal_year(frappe.datetime.get_today()),
=======
			"fieldname":"fiscal_year",
			"label": __("Fiscal Year"),
			"fieldtype": "Link",
			"options":'Fiscal Year',
			"default": erpnext.utils.get_fiscal_year(frappe.datetime.get_today()),
>>>>>>> 4496a6760e (fix: Default year start and end dates in reports)
		},
		{
			fieldname: "company",
			label: __("Company"),
			fieldtype: "Link",
			options: "Company",
			default: frappe.defaults.get_user_default("Company"),
		},
	];
};
