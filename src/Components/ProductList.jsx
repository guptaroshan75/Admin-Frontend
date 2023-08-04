import React, { useState } from 'react';
import { Box, Divider, FormControlLabel, Pagination, Switch, Typography, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import EditProduct from './EditProduct';
import DeleteProduct from './DeletProduct';


const ProductList = ({ products, fetchAllProduct, handleChangeInput, addProduct }) => {
    const [invisible, setInvisible] = useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    return (
        <>
            <Box style={{ height: 400, width: '100%' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell component="th" scope="row"> PRODUCT NAME </TableCell>
                                <TableCell align="right"> CATEGORY </TableCell>
                                <TableCell align="right"> PRICE </TableCell>
                                <TableCell align="right"> SALE PRICE </TableCell>
                                <TableCell align="right"> STOCK </TableCell>
                                <TableCell align="right"> STATUS </TableCell>
                                <TableCell align="right"> VIEW </TableCell>
                                <TableCell align="right"> PUBLISHED </TableCell>
                                <TableCell align="right"> ACTIONS </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product?._id}>
                                    <TableCell component="th" scope="row">
                                        {product.productName}
                                    </TableCell>
                                    <TableCell align="right">{product.productName}</TableCell>
                                    <TableCell align="right">{product.price}</TableCell>
                                    <TableCell align="right">{product.salePrice}</TableCell>
                                    <TableCell align="right">{product.stock}</TableCell>
                                    <TableCell align="right">{product.status}</TableCell>
                                    <TableCell align="right">
                                        <ZoomInIcon sx={{ fontSize: 30, color: '#9e9e9e' }} />
                                    </TableCell>
                                    <TableCell align="right">
                                        <FormControlLabel
                                            sx={{ color: 'text.primary' }}
                                            control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <Box display={'flex'} format="" alignItems={'center'}>
                                            <Typography>
                                                <EditProduct addProduct={addProduct}
                                                    handleChangeInput={handleChangeInput}
                                                />
                                            </Typography>
                                            <Typography>
                                                <DeleteProduct product={product}
                                                    fetchAllProduct={fetchAllProduct}
                                                />
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Divider />
                    <Pagination count={10} />
                </TableContainer>
            </Box>
        </>
    );
}

export default ProductList;
