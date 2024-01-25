import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://api.stripe.com/v1/products?limit=${productsPerPage}&offset=${
            (currentPage - 1) * productsPerPage
          }`,
          {
            headers: {
              Authorization: `Bearer sk_test_51ObKHJKtMZDHrwRuYGMuTA9PtN9HHUe6S49TtO0bJSNVfjcOLGIq9f3ksl59qM2VPX6RXopTDSpJl46bWhjj1uIb00G67Csk2B`,
            },
          }
        );

        const data = await response.json();

        const productsWithDetails = await Promise.all(
          data.data.map(async (product) => {
            const priceResponse = await fetch(
              `https://api.stripe.com/v1/prices?product=${product.id}`,
              {
                headers: {
                  Authorization: `Bearer sk_test_51ObKHJKtMZDHrwRuYGMuTA9PtN9HHUe6S49TtO0bJSNVfjcOLGIq9f3ksl59qM2VPX6RXopTDSpJl46bWhjj1uIb00G67Csk2B`,
                },
              }
            );

            const priceData = await priceResponse.json();

            return {
              id: product.id,
              name: product.name,
              description: product.description,
              price: priceData.data[0]?.unit_amount / 100 || 0,
              image: product.images[0],
            };
          })
        );

        setProducts(productsWithDetails);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const totalProducts = 7; // Update this with the total number of products

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePagination = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/Login");
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "70px" }}>
      <Typography variant="h4" gutterBottom>
        Available Services are Below!
      </Typography>
      <Grid container spacing={10}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6">
                  ${product.price.toFixed(2)}
                  /per Hour
                </Typography>
              </CardContent>
              <CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleBuyNow}
                >
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Container>
        <Button
          disabled={currentPage === 1}
          onClick={() => handlePagination(currentPage - 1)}
        >
          Previous Page
        </Button>
        <Typography variant="body1" style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </Typography>
        <Button
          disabled={currentPage === totalPages}
          onClick={() => handlePagination(currentPage + 1)}
        >
          Next Page
        </Button>
      </Container>
    </Container>
  );
};

export default ProductPage;
