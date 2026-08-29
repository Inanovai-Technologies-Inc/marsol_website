# Copyright (c) 2026, Frappe Technologies Pvt Ltd and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class JobOpening(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		department: DF.Data
		description: DF.TextEditor
		employment_type: DF.Literal["Full-time", "Part-time", "Contract", "Internship"]
		job_title: DF.Data
		location: DF.Data
		published: DF.Check
	# end: auto-generated types
	pass
