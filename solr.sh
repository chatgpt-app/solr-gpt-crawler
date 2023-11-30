#!/bin/bash

# config-* というパターンにマッチするファイルに対してループを行う
for file in config-*; do
    # ファイルが存在するかどうかをチェック
    if [[ -f "$file" ]]; then
        echo "Processing $file..."
        cp $file config.ts
        npm start
    else
        echo "$file is not a valid file."
    fi
done
