import styled from "styled-components";


export const Card = styled.div`
    padding: 1em;
    border: 1px solid #7a7a7a;
    border-radius: 6px;
    width: 24%;
    margin:0.5%;

        h4{
            background-color: #222;
            color:#ffbb33;
            padding: .4em;
            margin-bottom: 1.3em;
            font-size: 1.3em;
            border-radius: 6px;
        }
        p{
            color: #7a7a7a;
            margin-bottom: 1em;
        }
        span{
            font-weight: bold;
        }
        .category_text{
            display: flex;
            align-items: center;
        }
        .category_text span{
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #ccc;
            margin-right: 5px;
        }
        .category_text .infra{
            background-color: #ffaebc;
        }
        .category_text .desenvolvimento{
            background-color: #a0e7e5;
        }
        .category_text .design{
            background-color: #b4f8c8;
        }
        .category_text .planejamento{
            background-color: #fbe7c6;
        }


        .project_card_actions{
            margin-top: 1.2em;
            display: flex;
            align-items: center;
        }
        
        .project_card_actions a, .project_card_actions button {
            text-decoration: none;
            border:none;
            background-color: #fff;
            color: #222;
            font-size: .9em;
            padding: .6em 1em;
            margin-right: 1em;
            cursor: pointer;
            border: 1px solid #222;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.5s;
            border-radius: 6px;
        }
        .project_card_actions svg{
            margin-right: .5em;

        }
        .project_card_actions a:hover, .project_card_actions button:hover{
            background-color: #222;
            color: #ffbb33;
        }

`