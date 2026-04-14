app_name = "erpnext_theme"
app_title = "ERPNext Theme"
app_publisher = ""
app_description = "Custom ERPNext theme inspired by modern design"
app_icon = "fa-palette"
app_color = "#0891b2"
app_email = ""
app_url = ""
app_version = "0.0.1"
app_license = "MIT"
app_branch = "main"

# App Modules
# doc_events = {}

# Website
website_route_rules = [
    # {"from_route": "/<path>", "to_route": "/templates/web.html"},
]

# Desk Assets
# Note: These are injected into the desk interface
# app_include_js = "/assets/erpnext_theme/js/theme.js"
# app_include_css = "/assets/erpnext_theme/css/theme.css"

# Website Assets
# These are injected into website pages (web.html)
# Use app_include_css for website theme
app_include_css = "/assets/erpnext_theme/css/theme.css"
app_include_js = "/assets/erpnext_theme/js/theme.js"

# Website Branding
# brand_html = '<div class="brand-wrapper"><img src="/assets/erpnext_theme/images/logo.svg" width="32" height="32"/> ERPNext</div>'
# footer_template = "templates/web/footer.html"
# base_template = "templates/web/base.html"

# Navigation
# website_context.update {
#     "top_bar_items": [...]
# }

# Web Templates
# jinja = {
#     "methods": [
#         "erpnext_theme.utils.get_theme_color",
#     ]
# }


def website_context(website_context):
    """Extend website context for app"""
    website_context.update(
        {
            "theme_primary": "#0f172a",
            "theme_accent": "#0891b2",
            "theme_accent_light": "#22d3ee",
            "theme_font_family": "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
            "theme_heading_font": "'Space Grotesk', sans-serif",
        }
    )
