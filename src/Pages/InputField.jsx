import React, { useState } from 'react';
import { Typography, Box, TextField, MenuItem, FormControl, OutlinedInput, InputAdornment
} from '@mui/material';

const InputField = ({ addProduct, handleChangeInput }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setSelectedImage(selectedImage);
        } else {
            setSelectedImage(null);
        }
    };

    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const Defaultcategories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
    const [DefaultselectedCategory, setDefaultSelectedCategory] = useState('');

    const handleDefaultCategoryChange = (event) => {
        setDefaultSelectedCategory(event.target.value);
    };

    return (
        <>
            <Box sx={{ px: 4, mb: 3}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                    <Typography sx={{ mt: 1 }}>Product Title/Name</Typography>
                    <TextField id="outlined-basic" name='productName' value={addProduct.productName}
                        variant="outlined" sx={{ width: '70%' }} type={'productName'}
                        placeholder='Product Title/Name'
                        onChange={handleChangeInput} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ mt: 5, ml: 5, mx: 0 }}>Product Description</Typography>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={3} name='description' value={addProduct.description}
                        variant="outlined" onChange={handleChangeInput}
                        sx={{ width: '70%', mt: 5 }} type={'description'}
                        placeholder="Product Description"
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
                    <Typography variant="h7">Product Images</Typography>
                    <TextField
                        id="image-input"
                        type="file"
                        inputProps={{ accept: 'image/*' }}
                        variant="outlined"
                        sx={{ width: '70%', mt: 1 }}
                        onChange={handleImageChange}
                        placeholder="Drag your images here"
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', }} >
                    <Typography sx={{ mt: 5, ml: 5, mx: 0 }}>Product SKU</Typography>
                    <TextField id="outlined-basic" name='productSKU' value={addProduct.productSKU}
                        variant="outlined" sx={{ width: '70%', mt: 5, }} type={'productSKU'}
                        placeholder='Product SKU'
                        onChange={handleChangeInput} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                    <Typography sx={{ mt: 5, ml: 5, mx: 0 }}>Product Barcode</Typography>
                    <TextField id="outlined-basic" name='productBarcode' 
                    value={addProduct.productBarcode} placeholder='Product Barcode'
                        variant="outlined" sx={{ width: '70%', mt: 5, }} type={'productBarcode'}
                        onChange={handleChangeInput} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ mt: 5, ml: 5, mx: 0 }}>Category</Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        sx={{ width: '70%', mt: 5 }}
                        label="Category"
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ mt: 5, ml: 5, mx: 0 }}>Default Category</Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        select
                        value={DefaultselectedCategory}
                        onChange={handleDefaultCategoryChange}
                        sx={{ width: '70%', mt: 5 }}
                        label="Default Category"
                    >
                        {Defaultcategories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', }} >
                    <Typography sx={{ mt: 5, ml: 5, mx: 0 }}>Product Price</Typography>
                    <FormControl fullWidth sx={{ width: '70%', mt: 5 }}>
                        <OutlinedInput placeholder='Product Price'
                            onChange={handleChangeInput}
                            name='price' value={addProduct.price} type={'price'}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', }} >
                    <Typography sx={{ mt: 5, ml: 5, mx: 0 }}>Sale Price</Typography>
                    <FormControl fullWidth sx={{ width: '70%', mt: 5 }}>
                        <OutlinedInput placeholder='Sale Price'
                            onChange={handleChangeInput}
                            name='salePrice' value={addProduct.salePrice} type={'salePrice'}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', }} >
                    <Typography sx={{ mt: 5, ml: 5, mx: 0 }}>Product Quantity</Typography>
                    <TextField id="outlined-basic" name='productQuantity'
                     value={addProduct.productQuantity} placeholder='Product Slug'
                        variant="outlined" sx={{ width: '70%', mt: 5, }} type={'productQuantity'}
                        onChange={handleChangeInput} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', }} >
                    <Typography sx={{ mt: 5, ml: 5, mx: 0 }}>Product Slug</Typography>
                    <TextField id="outlined-basic" name='productSlug' 
                    value={addProduct.productSlug} placeholder='Product Tags'
                        variant="outlined" sx={{ width: '70%', mt: 5, }} type={'productSlug'}
                        onChange={handleChangeInput} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', }} >
                    <Typography sx={{ mt: 5, ml: 5, mx: 0 }}>Product Tags </Typography>
                    <TextField id="outlined-basic" name='productTags' 
                    value={addProduct.productTags} placeholder='Product Quantity'
                        variant="outlined" sx={{ width: '70%', mt: 5, }} type={'productTags'}
                        onChange={handleChangeInput} />
                </Box>
            </Box>
        </>
    )
}

export default InputField