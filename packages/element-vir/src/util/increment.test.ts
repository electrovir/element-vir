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
});
