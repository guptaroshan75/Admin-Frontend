import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import EditIcon from '@mui/icons-material/Edit';
import ProductList from '../Components/ProductList';
import AddProduct from '../Components/AddProduct'
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API } from '../API';

const category = [
  { label: 'The Shawshank Redemption' },
  { label: 'The Godfather' },
  { label: 'The Godfather: Part II' },
  { label: 'The Dark Knight' },
  { label: '12 Angry Men' },
  { label: "Schindler's List" },
  { label: 'Pulp Fiction' }
]

const price = [
  { label: 'Low to High' },
  { label: 'High to Low' },
  { label: 'Published' },
  { label: 'Unpublished' },
  { label: 'Status - Selling' },
  { label: "Status - Out of Stock" },
  { label: 'Date Added (Asc)' },
  { label: 'Date Added (Desc)' },
  { label: 'Date Updated (Asc)' },
  { label: 'Date Updated (Desc)' }
]

const Products = () => {
  const [addProduct, setAddProduct] = useState({
    productName: '',
    description: '',
    productSKU: '',
    productBarcode: '',
    price: '',
    salePrice: '',
    productQuantity: '',
    productSlug: '',
    productTags: ''
  })

  const handleChangeInput = (e) => {
    setAddProduct({
      ...addProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddToProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API}/addProducts`, addProduct);
      toast.success("Product Creataed Successfully");
      setAddProduct({
        productName: '',
        description: '',
        productSKU: '',
        productBarcode: '',
        price: '',
        salePrice: '',
        productQuantity: '',
        productSlug: '',
        productTags: ''
      });
      fetchAllProduct();
      console.log('Product Added Successfully', response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const [products, setProducts] = useState([]);

  const fetchAllProduct = async () => {
    try {
      const response = await axios.get(`${API}/getAllProducts`);
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, px: 3, mt: 10, ml: 30, }} >
      <Navbar />
      <Typography variant="h5" sx={{ my: 2, fontWeight: 800 }}> Products </Typography>
      <Paper sx={{
        display: 'flex', justifyContent: 'space-between',
        flexWrap: 'wrap', px: 2, py: 1
      }}
      >
        <Box my={2}>
          <Button variant="outlined" startIcon={<FileUploadIcon />}
            sx={{ mr: 2, p: '10px', my: '5px' }}> Export
          </Button>
          <Button variant="outlined" startIcon={<SaveAltIcon />}
            sx={{ p: '10px', my: '5px' }}> Import
          </Button>
        </Box>

        <Box my={2}>
          <Button variant="contained" startIcon={<EditIcon />}
            sx={{
              mr: 2, p: '10px', my: '5px', backgroundColor: '#bbbfbc', '&:hover': {
                backgroundColor: '#bbbfbc'
              },
            }}> Bulk Action
          </Button>
          <Button variant="contained" startIcon={<DeleteIcon />}
            sx={{
              mr: 2, p: '10px', my: '5px', backgroundColor: '#ed5342', '&:hover': {
                backgroundColor: '#ed5342',
              },
            }}> Delete
          </Button>
          <Button>
            <AddProduct handleChangeInput={handleChangeInput} addProduct={addProduct}
              handleAddToProduct={handleAddToProduct} />
          </Button>
        </Box>
      </Paper>
      <Paper sx={{
        display: 'flex', justifyContent: 'space-between',
        flexWrap: 'wrap', px: 2, py: 1, mt: 3, alignItems: 'center'
      }}
      >
        <Box sx={{ m: 1 }} size="small">
          <TextField variant="outlined" sx={{ width: 300 }} placeholder='Search Product' />
        </Box>
        <Box>
          <Autocomplete disablePortal options={category} sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} placeholder='Category' />}
          />
        </Box>
        <Box>
          <Autocomplete disablePortal options={price} sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} placeholder='Price' />}
          />
        </Box>
      </Paper>
      <Box my={2}>
        <ProductList products={products} key={products?.id} fetchAllProduct={fetchAllProduct}
          handleChangeInput={handleChangeInput} addProduct={addProduct}
        />
      </Box>
    </Box>
  );
}

export default Products;