from django.contrib import admin
from .models import Category, Product


# ==================================================
# CATEGORY ADMIN
# ==================================================

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "slug",
        "is_active",
    )

    list_display_links = (
        "name",
    )

    list_filter = (
        "is_active",
    )

    search_fields = (
        "name",
        "description",
    )

    prepopulated_fields = {
        "slug": ("name",)
    }

    ordering = (
        "name",
    )


# ==================================================
# PRODUCT ADMIN
# ==================================================

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "category",
        "price",
        "stock",
        "featured",
        "is_active",
        "created_at",
    )

    list_display_links = (
        "name",
    )

    list_editable = (
        "price",
        "stock",
        "featured",
        "is_active",
    )

    list_filter = (
        "category",
        "featured",
        "is_active",
    )

    search_fields = (
        "name",
        "subtitle",
        "description",
        "story",
    )

    prepopulated_fields = {
        "slug": ("name",)
    }

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    ordering = (
        "-created_at",
    )

    fieldsets = (

        (
            "Basic Information",
            {
                "fields": (
                    "category",
                    "name",
                    "slug",
                    "subtitle",
                    "image",
                )
            }
        ),

        (
            "Pricing",
            {
                "fields": (
                    "price",
                    "stock",
                )
            }
        ),

        (
            "Fragrance Details",
            {
                "fields": (
                    "volume",
                    "concentration",
                    "longevity",
                )
            }
        ),

        (
            "Content",
            {
                "fields": (
                    "description",
                    "story",
                )
            }
        ),

        (
            "Status",
            {
                "fields": (
                    "featured",
                    "is_active",
                )
            }
        ),

        (
            "Dates",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                )
            }
        ),

    )