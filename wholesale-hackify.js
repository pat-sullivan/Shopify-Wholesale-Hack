  <script>
  
      $(function() {
        $wholesalehide = $(".product > div:contains('Wholesale')").closest(".product").detach(); // Create jQuery object and remove wholesale items for all users. (NOTE: Exact DOM path varies by site/theme)
        $(".browse-tags").css("display", "none"); // Optional
        
        {% if customer.tags contains 'Wholesale' %}
            $("#collection > .products").append($wholesalehide); // Append wholesale items into the "products" row for logged in wholesale customers.
          var url = window.location.href;
             if (url.search("collections/all") >= 0) { // Will only execute the following code if the user is on the main collection page
               $('.title:contains("YOUR WHOLESALE PRODUCT TITLE")').closest(".product").addClass("clearit");
           }; // The above code adds a clearing class to the parent product div that matches the text string in "contains". It may not be necessary for your code.
        {% endif %} 
        
       var url = window.location.href;

       if (url.search("products/") >= 0) {
         $('h1.title:contains("(Wholesale)")').closest("#content").addClass("wholesale-hd"); // Hide wholesale items for all users who type in direct url to products. Enter product URL's in above line
       } 
       {% if customer.tags contains 'Wholesale' %}
           $("#product").removeClass("wholesale-hd"); // Show wholesale products for logged in wholesale customers.
       {% endif %}  
      });

  </script>
