import { FastifyReply, FastifyRequest } from 'fastify';
import * as db from './productsDb';

export async function getProducts(
  req: FastifyRequest,
  res: FastifyReply<any>,
) {
  try {
    let products: db.Product[] = [];

    const ids: [string] = req.query.ids;

    if (ids) {
      products = await db.getProductsByIds(ids);
    } else {
      products = await db.getProducts();
    }

    res.send(products);
  } catch (err) {
    res.status(500).send({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

export async function getProductById(
  req: FastifyRequest,
  res: FastifyReply<any>,
) {
  try {
    const id: string = req.params.id;

    const [product]: db.Product[] = await db.getProductById(id);

    res.send(product);
  } catch (err) {
    res.status(500).send({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

export async function removeProductById(
  req: FastifyRequest,
  res: FastifyReply<any>,
) {
  try {
    const id: string = req.params.id;

    await db.removeProductById(id);

    res.send({ success: true });
  } catch (err) {
    res.status(500).send({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

export async function updateProductById(
  req: FastifyRequest<any>,
  res: FastifyReply<any>,
) {
  try {
    const id: string = req.params.id;
    const path: db.ProductPath = req.body;

    const [product]: db.Product[] = await db.updateProductById(
      id,
      path,
    );

    res.send(product);
  } catch (err) {
    res.status(500).send({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

export async function createProduct(
  req: FastifyRequest<any>,
  res: FastifyReply<any>,
) {
  try {
    const path: db.ProductPath = req.body;

    const [product]: db.Product[] = await db.createProduct(path);

    res.send(product);
  } catch (err) {
    res.status(500).send({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}
