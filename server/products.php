<?php

require_once './models/ProductsTable';
header('Content-Type: application/json');

// Create an instance of ProductsTable
$productsTable = new ProductsTable();

// Handle GET request to retrieve product data
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Call the getAllProducts method to get product data
    $products = $productsTable->getAllProducts();

    // Return the product data as JSON response
    echo json_encode($products);
} else {
    // Handle other HTTP methods if needed
    http_response_code(405); // Method Not Allowed
    echo json_encode(['message' => 'Method not allowed.']);
}
