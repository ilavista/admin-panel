<template>
    <div id="admin-panel-products">
        <h2>Продукция</h2>
        <div class="table-products">
            <div class="table-products-header">
                <div v-for="header in headers" :style="{width: header.width }">{{ header.title }}</div>
            </div>
            <div class="table-products-body">
                <div v-for="product in products" class="table-row">
                    <div v-for="(value, name, index) in product" :style="{width: headers[index].width }">{{
                            value
                        }}
                    </div>
                </div>
            </div>
        </div>
        <div class="table-products-pagination">
            <button v-for="page in totalPages" @click="changePage(page)" :class="{'active': activeButtonCheck(page)}">{{ page }}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['headers', 'products', 'count', 'limit'],
    data() {
        return {
            currentPage: 0
        }
    },
    computed: {
        totalPages: function () {
            return Math.ceil(this.count / this.limit)
        }
    },
    methods: {
        activeButtonCheck(data) {
            return data == this.currentPage +1
        },
        changePage(data) {
            this.currentPage = data
            this.$emit('changePage', {
                currentPage: this.currentPage
            })
        }
    }
}
</script>