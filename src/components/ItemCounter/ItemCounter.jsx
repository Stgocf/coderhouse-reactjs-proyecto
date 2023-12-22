import { useState } from "react";
import './ItemCounter.css'

export const ItemCounter = ({max_stock, itemQty, setItemQty}) => {


    const minusQty = () => {
        if (itemQty === 0 ){
            return setItemQty(itemQty => 0)
        }
        setItemQty(itemQty => itemQty - 1)
    }
    const plusQty = () => {
        if (itemQty === max_stock ){
            return setItemQty(itemQty)
        }
        setItemQty(itemQty => itemQty + 1)
    }

    return (
      <>
        <div className="input-group">
            <span className="input-group-btn">
                <button type='button' className="btn btn-default" onClick={minusQty}> - </button>
            </span>
            <span type="text" name='item-qty'>{itemQty}</span>
            <span className="input-group-btn">
                <button type='button' className="btn btn-default" onClick={plusQty}> + </button>
            </span>
        </div>
      </>
    )
  }