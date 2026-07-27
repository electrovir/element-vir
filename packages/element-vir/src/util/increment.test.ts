import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {type Decrement, type Increment} from './increment.js';

describe('Increment', () => {
    it('increments', () => {
        assert.tsType<Increment<1>>().equals<2>();
        assert.tsType<Increment<10>>().equals<11>();
    });
    it('handles unknown inputs', () => {
        assert.tsType<Increment<unknown>>().equals<1>();
        assert.tsType<Increment<never>>().equals<1>();
        assert.tsType<Increment<'hi'>>().equals<never>();
    });
    it('handles out-of-bounds input', () => {
        assert.tsType<Increment<-10>>().equals<never>();
        assert.tsType<Increment<32>>().equals<never>();
        assert.tsType<Increment<30>>().equals<never>();
    });
    it('increments the lower and upper bounds', () => {
        assert.tsType<Increment<0>>().equals<1>();
        assert.tsType<Increment<29>>().equals<30>();
    });
    it('distributes over a union', () => {
        assert.tsType<Increment<1 | 2>>().equals<2 | 3>();
    });
    it('rejects non-integers and numeric strings', () => {
        assert.tsType<Increment<0.5>>().equals<never>();
        assert.tsType<Increment<'5'>>().equals<never>();
    });
    it('nests', () => {
        assert.tsType<Increment<Increment<Increment<1>>>>().equals<4>();
    });
});

describe('Decrement', () => {
    it('decrements', () => {
        assert.tsType<Decrement<1>>().equals<0>();
        assert.tsType<Decrement<10>>().equals<9>();
    });
    it('handles unknown inputs', () => {
        assert.tsType<Decrement<unknown>>().equals<never>();
        assert.tsType<Decrement<never>>().equals<never>();
        assert.tsType<Decrement<'hi'>>().equals<never>();
        assert.tsType<Decrement<-10>>().equals<never>();
    });
    it('handles lower bound', () => {
        assert.tsType<Decrement<0>>().equals<never>();
    });
    it('handles upper bounds', () => {
        assert.tsType<Decrement<30>>().equals<29>();
        assert.tsType<Decrement<31>>().equals<never>();
    });
    it('distributes over a union', () => {
        assert.tsType<Decrement<1 | 2>>().equals<0 | 1>();
    });
    it('rejects non-integers', () => {
        assert.tsType<Decrement<0.5>>().equals<never>();
    });
    it('undoes an increment', () => {
        assert.tsType<Decrement<Increment<7>>>().equals<7>();
    });
});
