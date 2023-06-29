<template>
    <div>
        <div class="user-profile">
            <table>
                <tr>
                    <th>Stt</th>
                    <th>ID</th>
                    <th>UserName</th>
                    <th>Rule</th>
                    <th>Sửa </th>
                    <th>Xóa</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>123</td>
                    <td>mot hai ba</td>
                    <td>user</td>
                    <td><button class="btn btn-warning">edit</button></td>
                    <td><button class="btn btn-danger">delete</button></td>
                </tr>
              
            </table>
        </div>
    </div>
</template>

<script >

</script>

<style lang="scss" scoped>
.user-profile {
    width: 43.75rem;
    // height: 200px;
    margin: 1rem auto;
    // background-color: green;
    table {
        border: 1px solid red;
    }
    table tr th {
        border: 1px solid black;
        padding: 0 1rem;
        background-color: rgb(159, 164, 164);
        
        &:nth-child(3) {
            background-color: green;
            width: 15rem;
        }
        &:nth-child(4) {
            width: 6rem;
        }
    }    
    table tr td {
        border: 1px solid black;
    }
}
</style>