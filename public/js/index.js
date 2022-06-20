"use strict";
let all_products = [];
let selected_products = [];
let total_amount_to_pay = 0;
$(document).ready(function() {
    load_products();    
});
function load_products() {
    $.ajax({
        url: '/api/products',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            all_products = data.products;
            $('#products_grid').html('');
            for(var i = 0; i < all_products.length; i++) {
                let product = all_products[i];
                $('#products_grid').append(`
                    <div class="col-3" style="margin-bottom: 20px;">
                        <div id="product_${product.id}" class="product tumbnail thumbnail-3" style="border: 1px solid #8080803d;border-radius: 10px;"><a href="#"><img src="${product.image}" style="width: 100%;border-top-left-radius: 10px;border-top-right-radius: 10px;"></a>
                        <div class="caption">
                            <span class="price sale">$${product.price}</span>
                            <p style="margin-bottom: 0px;height: 38px;line-height: 100%;">
                                <a style="font-size: 80%;">${product.name}</a>
                            </p>
                            <button id="product_button_${product.id}" onclick="selectProduct(${product.id}, this)" style="height: 24px;padding: 1px 4px;margin-top: 9px;" class="btn btn-outline-info btn-sm btn-block">Select</button>
                        </div>
                        </div>
                    </div>    
                `);
            }
        }
    });
}

function selectProduct(product_id, element){
    let selected_product = all_products.find(function(product){
        return product.id == product_id;
    });

    total_amount_to_pay = total_amount_to_pay + selected_product.price;
    $('#amount_to_pay').html('$'+total_amount_to_pay);

    selected_products.push(selected_product);
    render_selected_products();
    $(element).prop( "disabled", true );
}

function removeProduct(product_id){
    let temp_products = [];
    selected_products.map(function(product){
        if(product.id != product_id){
            temp_products.push(product);
        }
    });
    selected_products = temp_products;

    // update pay amount
    let removed_product = all_products.find(function(product){
        return product.id == product_id;
    });

    total_amount_to_pay = total_amount_to_pay - removed_product.price;
    $('#amount_to_pay').html('$'+total_amount_to_pay);
    // update pay amount
    // enable select button
    $('#product_button_'+removed_product.id).prop( "disabled", false );
    $('#product_'+removed_product.id).css('box-shadow','unset');
    // enable select button

    render_selected_products();
}

function render_selected_products(){
    $('#selected_products_list').html('');
    for(let i = 0; i < selected_products.length; i++){
        $('#product_'+selected_products[i].id).css('box-shadow','rgba(0, 255, 88, 0.66) 0px 0px 12px 0px');
        $('#selected_products_list').append(`
            <li class="list-group-item d-flex justify-content-between align-items-center" style="padding: 4px 4px;font-size: 90%;">
                <span style="width:80%;float: left;">${selected_products[i].name}</span>
                <span style="width:18%;float: right;margin-right: 4px;" class="badge badge-success badge-pill">$${selected_products[i].price}</span>
                <span onclick="removeProduct(${selected_products[i].id})" style="float: right;cursor: pointer;width: 20px;height: 20px;padding: 4px 0px;" class="badge badge-danger badge-pill" style="color: white;">✕</span>
            </li>
        `);
    }
    if(selected_products.length == 0){
        $('#selected_products_list').append(`
            <li class="list-group-item" id="no_product_selected_message">
                <h6 style="margin: 40px 20px;" class="text-center">No product selected, please select products from products list.</h6>
            </li>
        `);
        $('.selected_products_pay').css('display','none');
    }
    else{
        $('.selected_products_pay').css('display','block');
    }
}

function payAmount(){
    swal("TOTAL AMOUNT: $"+total_amount_to_pay, {
        content: "input",
      })
      .then((value) => {
        let entered_amount = parseFloat(value);
        let amount_to_pay = parseFloat(total_amount_to_pay);
        if(entered_amount && amount_to_pay){
            if(parseFloat(value) < parseFloat(total_amount_to_pay)){
                swal({
                    title: "Insufficient amount!",
                    text: "Please enter a valid amount!",
                    icon: "error",
                    button: "Okay!",
                  });
            }
            else if(parseFloat(value) > parseFloat(total_amount_to_pay)){
                swal({
                    title: "Paid successfully!",
                    text: "Returned change: $"+(parseFloat(value) - parseFloat(total_amount_to_pay)).toFixed(2),
                    icon: "success",
                });
                setTimeout(function(){
                    window.location.reload(1);
                 }, 2000);
            }
            else{
                swal({
                    title: "Paid successfully!",
                    text: "No change!",
                    icon: "success",
                });
                setTimeout(function(){
                    window.location.reload(1);
                 }, 2000);
            }
        }
        else{
            swal({
                title: "Invalid amount!",
                text: "Please enter a valid amount!",
                icon: "error",
                button: "Okay!",
              });
        }
        
      });
}