# Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and Contributors
# See license.txt
<<<<<<< HEAD

import unittest

import frappe
=======
import unittest

import frappe
from frappe.tests import IntegrationTestCase
>>>>>>> 94d7e5964b (fix: add doc.status to translation from POS)

from erpnext.projects.doctype.task.test_task import create_task


<<<<<<< HEAD
class TestProjectTemplate(unittest.TestCase):
=======
class TestProjectTemplate(IntegrationTestCase):
>>>>>>> 94d7e5964b (fix: add doc.status to translation from POS)
	pass


def make_project_template(project_template_name, project_tasks=None):
	if project_tasks is None:
		project_tasks = []
	if not frappe.db.exists("Project Template", project_template_name):
		project_tasks = project_tasks or [
			create_task(subject="_Test Template Task 1", is_template=1, begin=0, duration=3),
			create_task(subject="_Test Template Task 2", is_template=1, begin=0, duration=2),
		]
		doc = frappe.get_doc(dict(doctype="Project Template", name=project_template_name))
		for task in project_tasks:
			doc.append("tasks", {"task": task.name})
		doc.insert()

	return frappe.get_doc("Project Template", project_template_name)
