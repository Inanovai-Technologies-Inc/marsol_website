# Copyright (c) 2026, Frappe Technologies Pvt Ltd and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class MarsolCompanySettings(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		company_description: DF.SmallText | None
		data: DF.Data | None
		email: DF.Data | None
		phone: DF.Data | None
		website: DF.Data | None
	# end: auto-generated types
	pass
