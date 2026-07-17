from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView


class HomeView(View):

    def get(self, request, *args, **kwargs):

        return render(
            request,
            "app/home.html"
        )


class CollectionsView(View):

    def get(self, request, *args, **kwargs):

        return render(
            request,
            "app/collections.html"
        )


class ContactView(View):

    def get(self, request, *args, **kwargs):

        return render(
            request,
            "app/contact.html"
        )
    
class StoryView(View):

    def get(self, request, *args, **kwargs):

        return render(
            request,
            "app/story.html"
        )


class ProductDetailView(View):

    def get(self, request, slug, *args, **kwargs):

        products = {

    "noir": {

        "name": "NOIR",

        "price": "₹ 3,999",

        "image": "images/products/noir.png",

        "subtitle": "Deep Woody Luxury",

        "description":
        "A sophisticated fragrance built around rich woods, smoky spices and warm amber.",

        "story":
        "NOIR is crafted for evenings of quiet confidence, blending modern elegance with timeless depth.",

        "volume": "100 ml",

        "concentration": "Eau De Parfum",

        "longevity": "8–10 Hours",

        "top_notes": "Bergamot • Pink Pepper • Cardamom",

        "heart_notes": "Cedarwood • Iris • Patchouli",

        "base_notes": "Amber • Sandalwood • Musk",

    },

    "blanc": {

        "name": "BLANC",

        "price": "₹ 3,499",

        "image": "images/products/blanc.png",

        "subtitle": "Fresh White Musk",

        "description":
        "A clean and elegant composition with white musk and delicate florals.",

        "story":
        "BLANC celebrates purity and effortless sophistication with a fresh modern signature.",

        "volume": "100 ml",

        "concentration": "Eau De Parfum",

        "longevity": "7–9 Hours",

        "top_notes": "Lemon • Neroli • Pear",

        "heart_notes": "White Flowers • Jasmine • Lily",

        "base_notes": "White Musk • Cedar • Vanilla",

    },

    "oud-royale": {

        "name": "OUD ROYALE",

        "price": "₹ 5,999",

        "image": "images/products/oud-royale.png",

        "subtitle": "Royal Oud Essence",

        "description":
        "An intense oriental fragrance with precious oud and warm spices.",

        "story":
        "OUD ROYALE is inspired by royal palaces, rare woods and timeless luxury.",

        "volume": "100 ml",

        "concentration": "Extrait De Parfum",

        "longevity": "12+ Hours",

        "top_notes": "Saffron • Black Pepper",

        "heart_notes": "Rose • Oud",

        "base_notes": "Leather • Amber • Sandalwood",

    }

}

        product = products.get(slug)

        if not product:

            product = products["noir"]

        return render(

            request,

            "app/product-detail.html",

            {

                "product": product

            }

        )
    
class WishlistView(View):

    def get(self, request):

        return render(
            request,
            "app/wishlist.html"
        )
    
    def cart(request):

        return render(

            request,

            "app/cart.html"

        )
    
class CartView(View):

    template_name = "app/cart.html"

    def get(self, request):

        return render(
            request,
            self.template_name
        )
    
class CheckoutView(View):

    template_name = "app/checkout.html"

    def get(self, request):

        return render(
            request,
            self.template_name
        )
    
class OrderSuccessView(View):

    template_name = "app/order-success.html"

    def get(self, request):

        return render(request, self.template_name)
    
class ProfileView(TemplateView):
    template_name = "app/profile.html"

class LoginView(TemplateView):
    template_name = "app/login.html"

class RegisterView(TemplateView):
    template_name = "app/register.html"

class MyOrdersView(TemplateView):
    template_name = "app/my_orders.html"