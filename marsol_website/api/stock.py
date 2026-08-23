import frappe


@frappe.whitelist(allow_guest=True)
def get_stock(product_id):
    # Get the Marsol Product
    product = frappe.get_doc("Marsol Product", product_id)

    # Get the linked ERPNext Item
    item_code = product.erpnext_item

    if not item_code:
        return {
            "product": product.product_name,
            "item_code": None,
            "stock_qty": 0
        }

    # Get total stock from ERPNext Bin
    stock = frappe.db.sql("""
        SELECT SUM(actual_qty) AS qty
        FROM `tabBin`
        WHERE item_code = %s
    """, item_code, as_dict=True)

    qty = stock[0].qty or 0

    return {
        "product": product.product_name,
        "item_code": item_code,
        "stock_qty": qty
    }
