// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.query_reports["Itemwise Recommended Reorder Level"] = {
	filters: [
		{
<<<<<<< HEAD
			fieldname: "from_date",
			label: __("From Date"),
			fieldtype: "Date",
			default: frappe.sys_defaults.year_start_date,
=======
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
<<<<<<< HEAD
			"default": erpnext.utils.get_fiscal_year(frappe.datetime.get_today(), with_dates=true)[1],
>>>>>>> 4496a6760e (fix: Default year start and end dates in reports)
=======
			"default": erpnext.utils.get_fiscal_year(frappe.datetime.get_today(), true)[1],
>>>>>>> 2341061852 (fix: Default year start and end date in reports)
		},
		{
			fieldname: "to_date",
			label: __("To Date"),
			fieldtype: "Date",
			default: frappe.datetime.get_today(),
		},
		{
			fieldname: "item_group",
			label: __("Item Group"),
			fieldtype: "Link",
			options: "Item Group",
			reqd: 1,
		},
		{
			fieldname: "brand",
			label: __("Brand"),
			fieldtype: "Link",
			options: "Brand",
		},
	],
};
