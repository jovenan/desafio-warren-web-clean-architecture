<script setup lang="ts">
    import Modal from "./ui/ModalComp.vue";

    import { ref, onMounted, watch } from "vue";
    import { TransactionView } from "!@/build";
    import { formatDate, formatPrice } from "../utils";

    const transactionsTableHead = ["Data", "Titulo", "Descrição", "Status", "Valor"];
    const transactionView = ref(new TransactionView());
    const transactions = ref();

    const search = ref();
    const order = ref();

    const transactionSelected = ref();
    const openModal = ref(false);

    const getTransactions = async () => {
        const result = await transactionView.value.listTransaction();
        transactions.value = result;
    }

    const getTransaction = async (id: string) => {
        const result = await transactionView.value.getTransaction({id: id.toString()});
        if (!result) return null;
        transactionSelected.value = result;
        openModal.value = true;
    }

    watch(search, async () => {
        const result = await transactionView.value.searchTransactions({word: search.value});
        transactions.value = result;
    })

    watch(order, async () => {
        if (order.value == "Status") getTransactions();
        const result = await transactionView.value.filterTransactions({type: order.value});
        transactions.value = result;
    })
    
    onMounted(async () => {
        getTransactions();
    })
</script>

<template>
    <main>
        <div class="controls">
            <input placeholder="Pesquise pelo titulo" type="text" :value="search" @input="e => search = (e.target as HTMLInputElement).value">
            <select @change="e => order = (e.target as HTMLSelectElement).value">
                <option value="Status" selected>Status</option>
                <option value="created">Criado</option>
                <option value="processing" selected>Processando</option>
                <option value="processed">Processado</option>
            </select>
        </div>

        <div class="container-table">
            <table v-if="transactions">
                <thead>
                    <th v-for="(item, index) in transactionsTableHead" :key="index">
                        {{ item }}
                    </th>
                </thead>
                <tbody>
                    <tr v-if="transactions.length == 0">
                        <td v-for="index in 5" :key="index"></td>
                    </tr>
                    <tr v-for="(name, index) in transactions" :key="index" @click="getTransaction(name.id)">
                        <td>{{ formatDate(name.date) }}</td>
                        <td>{{ name.title }}</td>
                        <td>{{ name.description }}</td>
                        <td>{{ name.status }}</td>
                        <td>{{ formatPrice(name.amount) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
    <Modal v-if="transactionSelected" :close="openModal" @closed="openModal = !openModal">
        <div class="modal-content">
            <p class="title">{{ transactionSelected.title }}</p>

            <p class="situation">Situação: {{ transactionSelected.status }}</p>

            <div class="container">
                <p class="subtitle">Transferindo de</p>
                <hr>
                <div class="wrapper">
                    <p>{{ transactionSelected.from }}</p>
                    <p class="amount">{{ formatPrice(transactionSelected.amount) }}</p>
                </div>
            </div>

            <div class="container">
                <p class="subtitle">Para</p>
                <hr>
                <div class="wrapper">
                    <p>{{ transactionSelected.to }}</p>
                    <p class="amount">{{ formatPrice(transactionSelected.amount) }}</p>
                </div>
            </div>
        </div>
    </Modal>
</template>

<style scoped lang="less">
    @import "../assets/variables.less";

    main {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 50px;

        @media (min-width: @screen-md) {
            align-items: center;
        }
        
        .controls {
            margin-bottom: 25px;
            display: flex;
            justify-content: baseline;
            gap: 50px;

            input {
                width: 200px;
                padding: 5px 10px;
                border-radius: 20px;
                border: 1px solid black;
            }

            select {
                cursor: pointer;
                width: 130px;
                padding: 5px 10px;
                border-radius: 20px;
                border: 1px solid black;
            }
        }

        .container-table {
            width: 100%;
            overflow-x: auto;
            white-space: nowrap;

            display: flex;
            justify-content: baseline;

            @media (min-width: @screen-md) {
                justify-content: center;
            }

            table {
                border-spacing: 0;
                border: 1px solid gray;
                border-radius: 3px;
                max-width: 1280px;
    
                @media (min-width: @screen-md) {
                    width: 860px;
                }
        
                thead {
                    background-color: antiquewhite;
                    border-bottom: 1px solid gray;
        
                    th {
                        padding: 5px 10px;
                        min-width: 100px;
                    }
                }
        
                tr {
                    cursor: pointer;
        
                    &:nth-child(even) {
                        background-color: aliceblue;
                    }
        
                    &:nth-child(odd) {
                        background-color: lightgray;
                    }
        
                    &:hover {
                        background-color: rgb(167, 167, 167);
                    }

                    td {
                        padding: 5px 10px;
                        border-right: 1px solid gray;
                        
                        &:last-child {
                            border-right: 0;
                        }
                    }
                }
            }
        }
    }

    .modal-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 25px;

        .title {
            font-size: 32px;

            @media (min-width: @screen-md) {
                font-size: 48px;
            }
        }

        .situation {
            font-size: 24px;
        }

        .container {
            font-size: 24px;
            width: 75%;

            @media (min-width: @screen-md) {
                width: 50%;
            }

            .subtitle {
                width: 100%;
            }

            hr {
                width: 100%;
            }

            .wrapper {
                display: flex;
                justify-content: space-between;
                font-size: 16px;
            }
        }
    }
</style>