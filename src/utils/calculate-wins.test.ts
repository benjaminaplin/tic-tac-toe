import { describe, it, expect, vi } from 'vitest';
import { calculateWin } from './calculate-win';

describe('Calculate Wins', () => {
    it('calculates top row win', () => {
        expect(calculateWin([
            'x', 'x', 'x',
            'o', 'x', 'o',
            'x', 'o', 'x'
        ])).toEqual('x')
    })
    it('calculates diagonal top-right to bottom-left win', () => {
        expect(calculateWin([
            'o', 'x', 'x',
            null, 'x', 'o',
            'x', 'o', 'x'
        ])).toEqual('x')
    })
    it('calculates loss', () => {
        expect(calculateWin([
            null, 'x', 'x',
            null, 'x', 'o',
            null, 'o', 'x'
        ])).toEqual(null)
    })
    it('calculates draw', () => {
        expect(calculateWin([
            'x', 'x', 'o',
            'o', 'o', 'x',
            'x', 'o', 'x'
        ])).toEqual('draw')
    })
})