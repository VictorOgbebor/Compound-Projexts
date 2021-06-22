/**
 * @file Governance
 * @desc These methods facilitate interactions with the Governor smart contract.
 */
import { CallOptions, TrxResponse, Signature } from './types';
/**
 * Submit a vote on a Compound Governance proposal.
 *
 * @param {string} proposalId The ID of the proposal to vote on. This is an
 *     auto-incrementing integer in the Governor contract.
 * @param {number} support A number value of 0, 1, or 2 for the proposal vote.
 *     The numbers correspond to 'in-favor', 'against', and 'abstain'
 *     respectively.
 * @param {CallOptions} [options] Options to set for a transaction and Ethers.js
 *     method overrides.
 *
 * @returns {object} Returns an Ethers.js transaction object of the vote
 *     transaction.
 *
 * @example
 *
 * ```
 * const compound = new Compound(window.ethereum);
 *
 * (async function() {
 *   const castVoteTx = await compound.castVote(12, 1);
 *   console.log('Ethers.js transaction object', castVoteTx);
 * })().catch(console.error);
 * ```
 */
export declare function castVote(proposalId: number, support: number, options?: CallOptions): Promise<TrxResponse>;
/**
 * Submit a vote on a Compound Governance proposal using an EIP-712 signature.
 *
 * @param {string} proposalId The ID of the proposal to vote on. This is an
 *     auto-incrementing integer in the Governor contract.
 * @param {number} support A number value of 0, 1, or 2 for the proposal vote.
 *     The numbers correspond to 'in-favor', 'against', and 'abstain'
 *     respectively.
 * @param {object} signature An object that contains the v, r, and, s values of
 *     an EIP-712 signature.
 * @param {CallOptions} [options] Options to set for a transaction and Ethers.js
 *     method overrides.
 *
 * @returns {object} Returns an Ethers.js transaction object of the vote
 *     transaction.
 *
 * @example
 * ```
 * const compound = new Compound(window.ethereum);
 *
 * (async function() {
 *   const castVoteTx = await compound.castVoteBySig(
 *     12,
 *     1,
 *     {
 *       v: '0x1b',
 *       r: '0x130dbcd2faca07424c033b4479687cc1deeb65f08509e3ab397988cc4c6f2e78',
 *       s: '0x1debcb8250262f23906b1177161f0c7c9aa3641e6bff5b6f5c88a6bb78d5d8cd'
 *     }
 *   );
 *   console.log('Ethers.js transaction object', castVoteTx);
 * })().catch(console.error);
 * ```
 */
export declare function castVoteBySig(proposalId: number, support: number, signature: Signature, options?: CallOptions): Promise<TrxResponse>;
/**
 * Create a vote signature for a Compound Governance proposal using EIP-712.
 *     This can be used to create an 'empty ballot' without burning gas. The
 *     signature can then be sent to someone else to post to the blockchain.
 *     The recipient can post one signature using the `castVoteBySig` method.
 *
 * @param {string} proposalId The ID of the proposal to vote on. This is an
 *     auto-incrementing integer in the Governor contract.
 * @param {number} support A number value of 0, 1, or 2 for the proposal vote.
 *     The numbers correspond to 'in-favor', 'against', and 'abstain'
 *     respectively. To create an 'empty ballot' call this method thrice using
 *     `0`, `1`, and then `2` for this parameter.
 *
 * @returns {object} Returns an object that contains the `v`, `r`, and `s`
 *     components of an Ethereum signature as hexadecimal strings.
 *
 * @example
 * ```
 * const compound = new Compound(window.ethereum);
 *
 * (async () => {
 *
 *   const voteForSignature = await compound.createVoteSignature(20, 1);
 *   console.log('voteForSignature', voteForSignature);
 *
 *   const voteAgainstSignature = await compound.createVoteSignature(20, 0);
 *   console.log('voteAgainstSignature', voteAgainstSignature);
 *
 * })().catch(console.error);
 * ```
 */
export declare function createVoteSignature(proposalId: number, support: number): Promise<Signature>;
/**
 * Submit a Compound Governance proposal vote with a reason.
 *
 * @param {string} proposalId The ID of the proposal to vote on. This is an
 *     auto-incrementing integer in the Governor contract.
 * @param {number} support A number value of 0, 1, or 2 for the proposal vote.
 *     The numbers correspond to 'in-favor', 'against', and 'abstain'
 *     respectively.
 * @param {string} reason A string of the reason for a vote selection.
 * @param {CallOptions} [options] Options to set for a transaction and Ethers.js
 *     method overrides.
 *
 * @returns {object} Returns an Ethers.js transaction object of the vote
 *     transaction.
 *
 * @example
 *
 * ```
 * const compound = new Compound(window.ethereum);
 *
 * (async function() {
 *   const castVoteTx = await compound.castVoteWithReason(12, 1, 'I vote YES because...');
 *   console.log('Ethers.js transaction object', castVoteTx);
 * })().catch(console.error);
 * ```
 */
export declare function castVoteWithReason(proposalId: number, support: number, reason: string, options?: CallOptions): Promise<TrxResponse>;
