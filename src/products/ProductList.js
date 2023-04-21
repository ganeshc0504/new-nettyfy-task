import * as React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../app/product-slice/ProductSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link,useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const ProductList = () => {

    
    const rows = [];
    
    const navigate = useNavigate()
    const products = useSelector(selectProducts);
    Array.isArray(products) && products.map((prod) => rows.push(prod));
    
    const [more,setMore]= React.useState(5)

    const fetchOne = (id)=>{
      navigate(`/${id}`)
    }

    const loadMore = ()=>{
        setMore((prev)=>prev+5)
    }

  return (
    <div style={{width: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell> Id</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Discount Price</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(0, more).map((row) => (
              <TableRow
                key={row.id}
                onClick={()=>fetchOne(row.id)}
                style={{cursor:"pointer"}}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                 {row.id}
                </TableCell>
                <TableCell align="right">
                <img src={row.thumbnail} style={{width:"50px",height:"50px"}} />
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.discountPercentage}</TableCell>
                <TableCell align="right">{row.stock}</TableCell>
                <TableCell align="right">{row.Brand}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      <Button variant='contained' className="m-3" onClick={loadMore}>Load More</Button>
      </TableContainer>
    </div>
  );
};

export default ProductList;
