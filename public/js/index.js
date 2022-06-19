"use strict";
let selected_products = [];
$(document).ready(function() {
    load_products();
});
function load_products() {
    $.ajax({
        url: '/api/products',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data.products);
            $('#products_grid').html('');
            for(var i = 0; i < data.products.length; i++) {
                let product = data.products[i];
                $('#products_grid').append(`
                    <div class="col-3" style="margin-bottom: 20px;">
                        <div id="product_${product.id}" class="product tumbnail thumbnail-3" style="border: 1px solid #8080803d;border-radius: 10px;"><a href="#"><img src="${product.image}" style="width: 100%;border-top-left-radius: 10px;border-top-right-radius: 10px;"></a>
                        <div class="caption">
                            <span class="price sale">${product.price}$</span>
                            <p style="margin-bottom: 0px;height: 38px;line-height: 100%;">
                                <a style="font-size: 80%;">${product.name}</a>
                            </p>
                            <button onclick="selectProduct(${product.id})" style="height: 24px;padding: 1px 4px;margin-top: 9px;" class="btn btn-outline-info btn-sm btn-block">Select</button>
                        </div>
                        </div>
                    </div>    
                `);
            }
        }
    });
}

function selectProduct(product_id){
    selected_products.push(product_id);
    render_selected_products();
}

function render_selected_products(){
    for(let i = 0; i < selected_products.length; i++){
        $('#product_'+selected_products[i]).css('box-shadow','rgba(0, 255, 88, 0.66) 0px 0px 12px 0px');
    }
}