import frappe


@frappe.whitelist(allow_guest=True)
def get_products():
    return frappe.get_all(
        "Marsol Product",
        fields=[
            "name",
            "product_name",
            "product_route",
            "category",
            "industry",
            "description",
            "product_image",
            "product_logo",
        ],
        order_by="creation asc",
    )
